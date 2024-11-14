import { Cpu, PhoneCall, UsersThree } from '@phosphor-icons/react';
import React from 'react';

const styles = {
  title: 'text-5xl md:text-6xl text-center',
  container: 'text-[#FF060B] flex-col section-container',
  mainDiv: 'flex justify-center w-full',
  textArea: 'w-[80%] text-2xl text-gray-900 text-justify indent-25 mt-8 mb-8 ',
  diferenciais: 'w-[80%] grid grid-cols-[auto-fit] md:grid-cols-3  fr-auto',
  objetoDiferencial: 'flex flex-col text-xl items-center text-center',
};

const QuemSomos = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      <span className={styles.title}>Quem Somos</span>
      <div className={styles.textArea}>
      Fundada no dia 11 de junho de 1984, a FM Sergipe trilha desde o início um 
      longo caminho de conquistas. A emissora foi a primeira do estado a transmitir 
      uma programação ao vivo, ter transmissão também para a Bahia e Alagoas, abrir 
      espaço para a participação dos ouvintes no ar e responsável pela realização de 
      eventos de grande porte, como “Garota Verão”, “Primavera no Ar” e o “Forrozão”, 
      que até hoje é sucesso de público. <br></br><br></br>

      Além de explorar a interatividade com o ouvinte através da internet – incentivando pedidos 
      musicais, lançando promoções, brincadeiras, enquetes e prêmios -, a FM Sergipe mantém ainda 
      uma programação on-line, através de seu site www.fmsergipe.com.br, onde é possível acompanhar em tempo real tudo o que rola nos estúdios da emissora.<br></br><br></br>

      Os números de audiência provam que a FM fala no tom e vocabulário adequados, oferecendo uma 
      programação musical que atende as expectativas dos ouvintes e as melhores possibilidades de uso do meio “rádio” pelas agências e anunciantes.
      </div>
      {/* <div className={styles.diferenciais}>
        <div className={styles.objetoDiferencial}>
          <UsersThree size={84} color="#2f1963" />
          <span>Profissionais qualificados</span>
        </div>
        <div className={styles.objetoDiferencial}>
          <PhoneCall size={84} color="#2f1963" />
          <span>Atendimento dedicado</span>
        </div>
        <div className={styles.objetoDiferencial}>
          <Cpu size={84} color="#2f1963" />
          <span>Tecnologia de ponta</span>
        </div>
      </div> */}
    </div>
  </div>
));

export default QuemSomos;
