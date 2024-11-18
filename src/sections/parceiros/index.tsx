import React from 'react';
import ICON_TEMPORARIO from '@/images/icon-gif.gif';

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
            className="w-24 h-auto group-hover:w-32 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-28 h-auto group-hover:w-32 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group ">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500  "
            src={ICON_TEMPORARIO}
          ></img>
        </div>
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>
      </div>
      <div className="partner-div">
        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>

        <div className="partner-card group">
          <img
            className="w-36 h-auto group-hover:w-44 transition-all duration-500"
            src={ICON_TEMPORARIO}
          ></img>
        </div>
      </div>
    </div>
  </div>
));

export default Parceiros;
