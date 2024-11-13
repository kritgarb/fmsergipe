import ICON from '@/images/CFL_sign_redo.png';
import React from 'react';

const styles = {
  title: 'text-6xl md:text-8xl',
  descr: 'text-xl md:text-3xl w-full max-w-[500px]',
  frases: 'text-left flex flex-col z-10 text-primary max-w-[700px] w-[70%]',
  icon: 'blur-lg max-w-[550px] lg:blur-none absolute right-[18vw] h-auto',
  container: 'shrink w-[80%] flex flex-row items-center max-w-[1100px]',
  mainDiv:
    'min-h-[700px] bg-gradient-to-r from-babyBlue to-third from-5% via-35% to-100% flex place-content-center p-30',
};

const Outdoor = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={styles.mainDiv}>
      <div className={styles.container}>
        <div className={styles.frases}>
          <span className={styles.title}>Crie o futuro do seu negócio</span>
          <span className={styles.descr}>
            Oferecemos o impulso que você precisa para prosperar no mercado
          </span>
        </div>
        <img className={styles.icon} alt="CFL" src={ICON}></img>
      </div>
    </div>
  );
});

export default Outdoor;
