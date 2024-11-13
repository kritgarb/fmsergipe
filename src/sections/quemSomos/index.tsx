import { Cpu, PhoneCall, UsersThree } from '@phosphor-icons/react';
import React from 'react';

const styles = {
  title: 'text-5xl md:text-6xl text-center',
  container: 'text-primary flex-col section-container',
  mainDiv: 'flex justify-center w-full',
  textArea: 'w-[80%] text-2xl text-primary text-justify indent-25 mt-8 mb-8 ',
  diferenciais: 'w-[80%] grid grid-cols-[auto-fit] md:grid-cols-3  fr-auto',
  objetoDiferencial: 'flex flex-col text-xl items-center text-center',
};

const QuemSomos = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      <span className={styles.title}>Quem Somos</span>
      <div className={styles.textArea}>
        Somos uma empresa de tecnologia corporativa comprometida em fornecer
        soluções inovadoras e de alto impacto para nossos clientes através de
        nossos serviços e produtos
      </div>
      <div className={styles.diferenciais}>
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
      </div>
    </div>
  </div>
));

export default QuemSomos;
