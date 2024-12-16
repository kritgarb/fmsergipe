import GRUPO_SERGIPE from '@/images/gruposergipe_roxo-claro.png';
import GLOBO from '@/images/globo_roxo-claro.png';
import TV_SERGIPE from '@/images/tvsergipe_roxo-claro.png';
import FM_SERGIPE from '@/images/fmsergipe_roxo-claro.png';
import G1_GE from '@/images/g1ge_roxo-claro.png';
import SEVEN_OFICINA from '@/images/sevenOficina_roxo-claro.png';
import SEVEN_EVENTOS from '@/images/sevenEventos_roxo-claro.png';
import GRUPO_SERGIPE_COMPLETO from '@/images/Grupo Sergipe - BLACK.png';
import grupoSergipe from '@/images/logos-separadas/logo-grupoSergipe.png';
import separadorGrupoSergipe from '@/images/logos-separadas/separadorGrupoSergipe.png';
import cfl from '@/images/logos-separadas/logo-cfl.png';
import fmSergipe from '@/images/logos-separadas/logo-FMSergipe.png';
import g1SE from '@/images/logos-separadas/logo-g1se.png';
import geSE from '@/images/logos-separadas/logo-gese.png';
import globo from '@/images/logos-separadas/logo-globo.png';
import se7enCriativa from '@/images/logos-separadas/logo-se7enCriativa.png';
import se7enEventos from '@/images/logos-separadas/logo-se7enEventos.png';
import tvSergipe from '@/images/logos-separadas/logo-tvsergipe.png';

const imgStyle = 'w-auto max-h-[18px] sm:max-h-[30px]';

const GrupoSergipeFooter = ({ style }: { style?: string }) => {
  return (
    <div className="flex flex-row flex-wrap gap-[40px] justify-center items-center">
      <img
        src={grupoSergipe}
        alt="Grupo Sergipe"
        className="w-[30%] sm:w-[30%] md:w-[25%] lg:w-[20%] flex-grow transition-all duration-300 hover:scale-110"
        onClick={() => window.open("#", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={globo}
        alt="Globo"
        className="w-[10%] sm:w-[10%] md:w-[10%] lg:w-[5%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://www.globo.com/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={tvSergipe}
        alt="TV Sergipe"
        className="w-[20%] sm:w-[20%] md:w-[15%] lg:w-[12%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://redeglobo.globo.com/se/tvsergipe/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={g1SE}
        alt="G1 SE"
        className="w-[5%] sm:w-[5%] md:w-[8%] lg:w-[3%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://g1.globo.com/se/sergipe/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={geSE}
        alt="GE SE"
        className="w-[5%] sm:w-[5%] md:w-[8%] lg:w-[3%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://ge.globo.com/se/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={se7enCriativa}
        alt="Se7en Criativa"
        className="w-[15%] sm:w-[15%] md:w-[15%] lg:w-[8%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("http://sevenoficinacriativa.com.br/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={cfl}
        alt="CFL"
        className="w-[15%] sm:w-[15%] md:w-[15%] lg:w-[8%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://cfltecnologia.com.br/", "_blank")}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={se7enEventos}
        alt="Se7en Eventos"
        className="w-[15%] sm:w-[15%] md:w-[15%] lg:w-[8%] transition-all duration-300 hover:scale-110"
        onClick={() => window.open("#", "_blank")}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
export default GrupoSergipeFooter;
