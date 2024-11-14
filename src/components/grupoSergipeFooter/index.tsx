import GRUPO_SERGIPE from '@/images/gruposergipe_roxo-claro.png';
import GLOBO from '@/images/globo_roxo-claro.png';
import TV_SERGIPE from '@/images/tvsergipe_roxo-claro.png';
import FM_SERGIPE from '@/images/fmsergipe_roxo-claro.png';
import G1_GE from '@/images/g1ge_roxo-claro.png';
import SEVEN_OFICINA from '@/images/sevenOficina_roxo-claro.png';
import SEVEN_EVENTOS from '@/images/sevenEventos_roxo-claro.png';
import GRUPO_SERGIPE_COMPLETO from '@/images/Grupo Sergipe - BLACK.png';

const imgStyle = 'w-auto max-h-[18px] sm:max-h-[30px]';

const GrupoSergipeFooter = ({ style }: { style?: string }) => {
  return (
    <div>
      <img  src={GRUPO_SERGIPE_COMPLETO}/>
    </div>
  );
};

export default GrupoSergipeFooter;
