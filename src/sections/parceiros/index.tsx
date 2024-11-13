import React from 'react';
import SAMSUNG from '@/images/samsung.png';
import TRE_SE from '@/images/treSergipe.png';
import EMSURB from '@/images/emsurb.png';
import SEMED from '@/images/semed_aracaju.png';
import IBGE from '@/images/ibge_white.png';
import CAU_SE from '@/images/cau_se_white.png';
import INDIAROBA from '@/images/pref_indiaroba.png';

const Parceiros = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    className="flex justify-center w-full bg-[#f9f9f9] min-h-[700px]"
  >
    <div className="text-primary flex-row flex-wrap section-container gap-8 ">
      <span className="text-5xl sm:text-4xl text-center max-w-[80%] md:max-w-[20%]">
        Clientes e Parceiros
      </span>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-24 h-auto group-hover:w-32 transition-all duration-500"
            src={SEMED}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={TRE_SE}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-28 h-auto group-hover:w-32 transition-all duration-500"
            src={INDIAROBA}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={IBGE}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={EMSURB}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={CAU_SE}
          ></img>
        </div>

        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={SAMSUNG}
          ></img>
        </div>
      </div>
    </div>
  </div>
));

export default Parceiros;
