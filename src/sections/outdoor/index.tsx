import ICON from '@/images/Zé Bocao - sign-2.png';
import React, { useRef } from 'react';
import IconsButton from '@/components/ui/iconsButton';

const styles = {
  title: 'text-6xl md:text-8xl text-black',
  descr: 'text-xl md:text-3xl w-full max-w-[600px] text-black',
  frases: 'text-left flex flex-col z-10 text-primary max-w-[700px] w-[70%]',
  icon: 'blur-lg max-w-[520px] lg:blur-none absolute right-[15vw] h-auto drop-shadow-xl transition-transform duration-300 hover:scale-110',
  container: 'shrink w-[80%] flex flex-row items-center max-w-[1100px]',
  mainDiv: 'min-h-[700px] bg-gradient-to-r from-cor3 to-cor2 flex place-content-center p-30',
  buttonContainer: 'mt-6 flex flex-col gap-4 items-center sm:flex-row sm:items-start',
};

const Outdoor = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    }
  };

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
        <img
          className={styles.icon}
          alt="CFL"
          src={ICON}
          onMouseEnter={playSound} 
        />
        <audio ref={audioRef} src="../../assets/RISADA_LOUCA_2.mp3" preload="auto" />
      </div>
    </div>
  );
});

export default Outdoor;
