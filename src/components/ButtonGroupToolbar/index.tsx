import LOGO from '@/images/FM SERGIPE - COR HORIZONTAL-2023.png';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'react-responsive';
import { Menu } from '@/components/Menu';
import { TopMenuProps } from '@/interfaces';

const styles = {
  logo: 'w-70 max-w-[120px] h-auto',
  barContent:
    'flex flex-row content-center items-center h-[36px] mt-[10px] mb-[10px] w-[90%] md:w-full justify-around',
  barDiv:
    'w-full z-50 content-center justify-around h-[70px] bg-white text-black fixed top-0',
};

export default function ButtonGroupToolbar({ scrollToRef }: TopMenuProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.barDiv}>
      <div className={styles.barContent}>
        <Button className='text-black' onClick={() => scrollToRef('outdoor')} variant="ghost">
          <img src={LOGO} className={styles.logo}></img>
        </Button>
        {isMobile ? (
          <Menu scrollToRef={scrollToRef} />
        ) : (
          <div>
            <Button className='text-black' onClick={() => scrollToRef('parceiros')} variant="outline">
              Programação
            </Button>
            <Button className='text-black' variant="outline" onClick={() => scrollToRef('conectese')}>
              Escute a Rádio
            </Button>
            <Button className='text-black' variant="outline" onClick={() => scrollToRef('sep')}>
              Equipe
            </Button>
            <Button className='text-black' onClick={() => scrollToRef('quemsomos')} variant="outline">
              Sobre nós
            </Button>



            <Button
              onClick={() => scrollToRef('faleconosco')}
              variant="outline"
              className='text-black'
            >
              Peça uma Música
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
