import { createRef, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
// import submit from './submit';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Toaster, toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import faleConoscoSchema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import AVATAR from '@/images/avatar.png';

type Formulario = {
  nome: string;
  email: string;
  telefone: number;
  assunto: string;
  mensagem: string;
};

const styles = {
  container: 'text-white flex-row flex-wrap section-container pt-16',
  mainDiv: 'bg-white w-full flex place-content-center',
  button: 'text-white rounded-[5px] text-xl h-15 bg-[#FF060B] hover:bg-[#6C0000]',
  formDiv:
    'w-[90%] mt-4 md:mt-0 md:w-[50%] max-w-[400px] drop-shadow-lg text-xl bg-white text-[#FF060B] flex rounded-lg flex-col items-center gap-[20px] p-10',
  textArea:
    'w-[80%] md:w-[50%] text-2xl flex gap-[30px]  flex-col text-black text-left indent-25 md:p-10 ',
  form: 'flex flex-col gap-[20px]',
  title: 'text-3xl',
  descr: 'text-xl max-w-[400px]',
  topic: 'font-bold',
  topicDescr: 'font-normal',
  bloco1: 'my-9',
  sendArea:
    'flex flex-row  w-full text-slate-400 gap-4 place-content-center items-center text-justify ',
  politicas: 'text-sm max-w-[60%] p-0',
  faleconosco: 'text-center text-2xl',
  avatar: 'w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110',
};

const FaleConosco = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { register, handleSubmit } = useForm<Formulario>({
    resolver: zodResolver(faleConoscoSchema),
    shouldUseNativeValidation: true,
  });

  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = useCallback(
    async (data: Formulario) => {
      setLoading(true);
      if (!executeRecaptcha) {
        console.log('Não verificado');
        return;
      }
      try {
        const token = await executeRecaptcha('cfl_form');
        await api.post('/submitEmail', {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          assunto: data.assunto,
          mensagem: data.mensagem,
        });
        toast.success('Seu e-mail foi enviado!', {
          style: {
            background: '#bbf7d0',
          },
          description: 'Obrigado pelo contato, retornaremos assim que possível',
        });
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    },
    [executeRecaptcha]
  );
  return (
    <div ref={ref} className={styles.mainDiv}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <span className={styles.title}>
          Queremos ouvir você! Seja para mandar um recado, sugerir uma música ou compartilhar sua opinião.
          </span>
          <img className={styles.avatar} src={AVATAR}/>
        </div>
        <div className={styles.formDiv}>
          <span className={styles.faleconosco}>Fale conosco!</span>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              id="nome"
              {...register('nome')}
              placeholder="Nome"
            />
            <Input
              type="email"
              id="email"
              {...register('email')}
              placeholder="E-mail"
            />
            <Input
              type="number"
              id="telefone"
              {...register('telefone')}
              placeholder="Telefone"
            />
            <Input
              type="text"
              id="assunto"
              {...register('assunto')}
              placeholder="Assunto"
            />
            <Textarea
              id="mensagem"
              {...register('mensagem')}
              placeholder="Mensagem"
              maxLength={400}
            />
            <div className={styles.sendArea}>
              <Button
                disabled={loading}
                type="submit"
                className={styles.button}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Enviando</span>
                  </>
                ) : (
                  <span>Enviar</span>
                )}
              </Button>
              <span className={styles.politicas}>
                Ao clicar em “Enviar”, você concorda com nossa Política de
                Privacidade
              </span>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
});

export default FaleConosco;
