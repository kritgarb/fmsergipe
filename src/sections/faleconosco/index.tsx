import ButtonGroupToolbar from '../../components/ButtonGroupToolbar';
// import styles from './FaleConosco.module.css';
import { ArrowRight } from '@phosphor-icons/react';
import { createRef, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Toaster, toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import faleConoscoSchema from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

type Formulario = {
  nome: string;
  email: string;
  telefone: number;
  assunto: string;
  mensagem: string;
};

const styles = {
  container: 'text-white flex-row flex-wrap section-container pt-16',
  mainDiv: 'bg-babyBlue w-full flex place-content-center',
  button: 'text-white rounded-[5px] text-xl h-15',
  formDiv:
    'w-[90%] mt-4 md:mt-0 md:w-[50%] max-w-[400px] drop-shadow-lg text-xl bg-white text-secondary flex rounded-lg flex-col items-center gap-[20px] p-10',
  textArea:
    'w-[80%] md:w-[50%] text-2xl flex gap-[30px]  flex-col text-primary text-left indent-25 md:p-10 ',
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
            Desbloqueie a inovação com nossas soluções tecnológicas!
          </span>
          <div className={styles.descr}>
            <div className={styles.bloco1}>
              Acreditamos que o uso inteligente da tecnologia é fundamental para
              o sucesso de uma empresa e estamos prontos para ajudá-lo a
              alcançar seus objetivos. Podemos fornecer à sua empresa:
            </div>
            <div>
              <span className={styles.topic}>Profissionais qualificados</span>
              <span className={styles.topicDescr}>
                - Será atendido por especialistas apaixonados e experientes
              </span>
            </div>
            <div>
              <span className={styles.topic}>Tecnologia de Ponta</span>
              <span className={styles.topicDescr}>
                - Eficientes, seguras e inovadoras
              </span>
            </div>
            <div>
              <span className={styles.topic}>Atendimento Exclusivo</span>
              <span className={styles.topicDescr}>
                - Suporte dedicado e em prontidão
              </span>
            </div>
          </div>
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
