import React, { useRef } from 'react';

import CASE2 from '../../images/FM_SERGIPE_COR_HORIZONTAL.png';
import Atropos from 'atropos/react';

const styles = {
  container: 'text-white flex-col section-container',
  mainDiv: 'bg-cor3 w-full flex place-content-center',
  case2: 'flex flex-row flex-wrap place-content-center items-center',
  img: 'w-[90%] max-w-[90%] sm:max-w-[520px] shrink mx-auto h-auto',
  button: 'mt-5 flex items-center justify-center mx-auto gap-2 text-white rounded-md text-xl bg-[#FF060B] hover:bg-[#D00406] hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-2',
  textArea:
    'm-5 md:m-20 text-left text-xl sm:text-2xl w-full max-w-[90%] md:max-w-80 text-black',
  audioPlayer: 'mt-10 mx-auto w-full max-w-[90%]'
};

const Conecte = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Função para tocar o áudio ao vivo
  const playAudio = () => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Força a reconexão ao stream ao vivo
      audio.src = "https://08.stmip.net:8012/;";
      audio.load(); // Recarrega o stream
      audio.play().catch((err) => {
        console.error("Erro ao reproduzir o áudio:", err);
      });
    }
  };

  return (
    <div ref={ref} className={styles.mainDiv}>
      <div className={styles.container}>
        <div className={styles.case2}>
          <Atropos className={styles.img} activeOffset={40} shadowScale={0}>
            <img className={styles.img} src={CASE2} alt="FM Sergipe" />
          </Atropos>

          <p className={styles.textArea}>
            Conecte-se à música, notícias e emoções que fazem seu dia melhor. Sintonize agora e faça parte da nossa sintonia!
          </p>

          {/* Botão para iniciar o áudio */}
          <button className={styles.button} onClick={playAudio}>
            Ouvir ao Vivo
          </button>

          {/* Player de áudio */}
          <audio controls className={styles.audioPlayer} ref={audioRef}>
            <source src="https://08.stmip.net:8012/;" type="audio/mpeg" />
            Seu navegador não suporta o player de áudio.
          </audio>
        </div>
      </div>
    </div>
  );
});

export default Conecte;
