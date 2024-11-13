import GRUPO_SERGIPE from '@/images/gruposergipe_roxo-claro.png';
import GLOBO from '@/images/globo_roxo-claro.png';
import TV_SERGIPE from '@/images/tvsergipe_roxo-claro.png';
import FM_SERGIPE from '@/images/fmsergipe_roxo-claro.png';
import G1_GE from '@/images/g1ge_roxo-claro.png';
import SEVEN_OFICINA from '@/images/sevenOficina_roxo-claro.png';
import SEVEN_EVENTOS from '@/images/sevenEventos_roxo-claro.png';

const imgStyle = 'w-auto max-h-[18px] sm:max-h-[30px]';

const GrupoSergipeFooter = ({ style }: { style?: string }) => {
  return (
    <div
      className={`${style} gap-[20px] flex flex-row flex-wrap justify-center items-center content-center`}
    >
      <img className={imgStyle} src={GRUPO_SERGIPE} />
      <img className={imgStyle} src={GLOBO} />
      <img className={imgStyle} src={TV_SERGIPE} />
      <img className={imgStyle} src={FM_SERGIPE} />
      <img className={imgStyle} src={G1_GE} />
      <img className={imgStyle} src={SEVEN_OFICINA} />
      <img className={imgStyle} src={SEVEN_EVENTOS} />
    </div>
  );
};

export default GrupoSergipeFooter;
