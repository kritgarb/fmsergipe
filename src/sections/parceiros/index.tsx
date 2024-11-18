import React from 'react';
import linha_Direta from '@/images/Programação Principal/LINHA-DIRETA.png';
import dez_Mais from '@/images/Programação Principal/10-+-2edicao.png';
import conectado from '@/images/Programação Principal/CONECTADO.png';
import juntoEmisturado from '@/images/Programação Principal/JUNTO-E-MISTURADO.png';
import superTarde from '@/images/Programação Principal/SUPERTARDE.png';
import tocaTudo from '@/images/Programação Principal/TOCA-TUDO-95.png';
import viva from '@/images/Programação Principal/VIVA.png';


const Parceiros = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    className="flex justify-center w-full bg-white min-h-[700px]"
  >
    <div className="text-[#000] flex-row bg-white flex-wrap section-container gap-8 ">
      <span className="text-5xl sm:text-4xl text-center max-w-[80%] md:max-w-[20%]">
        Programação Principal
      </span>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-48 h-auto group-hover:w-32 transition-all duration-500"
            src={linha_Direta}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-32 transition-all duration-500"
            src={dez_Mais}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-32 transition-all duration-500"
            src={conectado}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group ">
          <img
            className="w-36 h-auto group-hover:w-32 transition-all duration-500"
            src={juntoEmisturado}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-48 h-auto group-hover:w-32 transition-all duration-500"
            src={superTarde}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-32 transition-all duration-500"
            src={tocaTudo}
          ></img>
        </div>

        <div className="partner-card group">
          <img
            className="w-48 h-auto group-hover:w-32 transition-all duration-500"
            src={viva}
          ></img>
        </div>
      </div>
    </div>
  </div>
));

export default Parceiros;
