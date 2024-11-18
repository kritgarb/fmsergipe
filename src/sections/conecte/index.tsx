import React from 'react';

import CASE2 from '../../images/FM_SERGIPE_COR_HORIZONTAL.png';
import Atropos from 'atropos/react';
import { Button } from '@mui/material';

const styles = {
  container: 'text-white flex-col section-container',
  mainDiv: 'bg-cor3 w-full flex place-content-center',
  case1: 'flex flex-row flex-wrap-reverse place-content-center items-center',
  case2: 'flex flex-row flex-wrap place-content-center items-center',
  img: 'w-[90%] max-w-[90%] sm:max-w-[520px] shrink mx-auto h-auto ',
  textArea:
    'm-5 md:m-20 text-left text-xl sm:text-2xl w-full max-w-[90%] md:max-w-80 text-black',
};

const Conecte = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      
      <div className={styles.case2}>
        <Atropos className={styles.img} activeOffset={40} shadowScale={0}>
          <img className={styles.img} src={CASE2}></img>
        </Atropos>
        <p className={styles.textArea}>
        Conecte-se à música, notícias e emoções que fazem seu dia melhor. Sintonize agora e faça parte da nossa sintonia!
        </p>
      </div>
      
    </div>
  </div>
));

export default Conecte;
