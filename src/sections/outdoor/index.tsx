import ICON from '@/images/Zé Bocao - sign-2.png';
import React from 'react';
import IconsButton from '@/components/ui/iconsButton';

const styles = {
  title: 'text-6xl md:text-8xl text-black',
  descr: 'text-xl md:text-3xl w-full max-w-[600px] text-black',
  frases: 'text-left flex flex-col z-10 text-primary max-w-[700px] w-[70%]',
  icon: 'blur-lg max-w-[520px] lg:blur-none absolute right-[18vw] h-auto drop-shadow-xl transition-transform duration-300 hover:scale-110',
  container: 'shrink w-[80%] flex flex-row items-center max-w-[1100px]',
  mainDiv: 'min-h-[700px] bg-gradient-to-r from-cor3 to-cor2 flex place-content-center p-30',
  buttonContainer: 'mt-6 flex gap-4', 
};

const Outdoor = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={styles.mainDiv}>
      <div className={styles.container}>
        <div className={styles.frases}>
          <span className={styles.title}>Conecte-se ao som do sucesso</span>
          <span className={styles.descr}>
            Leve sua paixão pelo rádio a um novo nível
          </span>
          <div className={styles.buttonContainer}>
            <IconsButton />
          </div>
        </div>
        <img className={styles.icon} alt="CFL" src={ICON}></img>
      </div>
    </div>
  );
});

export default Outdoor;
