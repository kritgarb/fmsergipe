import React, { useState } from 'react';
import CASE2 from '../../images/FM_SERGIPE_COR_HORIZONTAL.png';
import Atropos from 'atropos/react';
import { Button } from '@mui/material';

const styles = {
  container: 'text-white flex-col section-container',
  mainDiv: 'bg-cor3 w-full flex place-content-center',
  case2: 'flex flex-row flex-wrap place-content-center items-center',
  img: 'w-[90%] max-w-[90%] sm:max-w-[520px] shrink mx-auto h-auto ',
  button: 'mt-5 flex items-center justify-center mx-auto gap-2 text-white rounded-md text-xl bg-[#FF060B] hover:bg-[#D00406] hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-2',
  textArea:
    'm-5 md:m-20 text-left text-xl sm:text-2xl w-full max-w-[90%] md:max-w-80 text-black',
  modal: 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center',
  modalContent: 'bg-white p-6 rounded-lg w-[80%] max-w-[500px]',
  closeButton: 'mt-4 text-white bg-[#FF060B] hover:bg-[#D00406] px-4 py-2 rounded',
  audioPlayer: 'w-full',
};

const Conecte = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
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

          {/* Botão para abrir o modal e tocar o áudio */}
          <button
            className={styles.button}
            onClick={openModal}
          >
            Escute a Rádio
          </button>
        </div>

        
        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3 className="text-center">Reproduzindo Rádio</h3>
              <audio controls autoPlay>
                <source src="http://www.fmsergipe.com.br/radio-ao-vivo" type="audio/mpeg" />
                Seu navegador não suporta o player de áudio.
              </audio>
              <div className="text-center">
                <button className={styles.closeButton} onClick={closeModal}>Fechar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Conecte;
