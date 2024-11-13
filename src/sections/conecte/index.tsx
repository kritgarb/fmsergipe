import React from 'react';
import CASE1 from '../../images/IMAGEM-1-DO-CASE.png';
import CASE2 from '../../images/IMAGEM-2-DO-CASE.png';
import Atropos from 'atropos/react';

const styles = {
  container: 'text-white flex-col section-container',
  mainDiv: 'bg-secondary w-full flex place-content-center',
  case1: 'flex flex-row flex-wrap-reverse place-content-center items-center',
  case2: 'flex flex-row flex-wrap place-content-center items-center',
  img: 'w-[90%] max-w-[90%] sm:max-w-[520px] shrink mx-auto h-auto',
  textArea:
    'm-5 md:m-20 text-left text-xl sm:text-2xl w-full max-w-[90%] md:max-w-80',
};

const Conecte = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      <div className={styles.case1}>
        <p className={styles.textArea}>
          Nossos serviços, como softwares e transmissões, são facilmente
          acessáveis via internet, conectando você ao cliente de maneira fácil,
          instantânea e contínua, características essenciais em um mundo cada
          vez mais conectado
        </p>
        <Atropos className={styles.img} activeOffset={40} shadowScale={1.05}>
          <img className={styles.img} src={CASE2}></img>
        </Atropos>
      </div>
      <div className={styles.case2}>
        <Atropos className={styles.img} activeOffset={40} shadowScale={1.05}>
          <img className={styles.img} src={CASE1}></img>
        </Atropos>
        <p className={styles.textArea}>
          Os dados são a chave para o sucesso. Com nossos sistemas, números se
          transformam em estratégias, proporcionando uma compreensão profunda do
          seu negócio e impulsionando o crescimento do mesmo
        </p>
      </div>
    </div>
  </div>
));

export default Conecte;
