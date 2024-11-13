import LOGO from '@/images/LOGO-CFL-TECNOLOGIA-2.png';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'react-responsive';
import { Menu } from '@/components/Menu';
import { TopMenuProps } from '@/interfaces';

const styles = {
  logo: 'w-70 max-w-[120px] h-auto',
  barContent:
    'flex flex-row content-center items-center h-[36px] mt-[10px] mb-[10px] w-[90%] md:w-full justify-around',
  barDiv:
    'w-full z-50 content-center justify-around h-[56px] bg-white text-secondary fixed top-0',
};

export default function ButtonGroupToolbar({ scrollToRef }: TopMenuProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.barDiv}>
      <div className={styles.barContent}>
        <Button onClick={() => scrollToRef('outdoor')} variant="ghost">
          <img src={LOGO} className={styles.logo}></img>
        </Button>
        {isMobile ? (
          <Menu scrollToRef={scrollToRef} />
        ) : (
          <div>
            <Button onClick={() => scrollToRef('quemsomos')} variant="outline">
              Quem Somos
            </Button>
            <Button variant="outline" onClick={() => scrollToRef('conectese')}>
              Conecte-se
            </Button>
            <Button variant="outline" onClick={() => scrollToRef('sep')}>
              Soluções & Produtos
            </Button>
            <Button onClick={() => scrollToRef('parceiros')} variant="outline">
              Clientes e Parceiros
            </Button>
            <Button
              onClick={() => scrollToRef('faleconosco')}
              variant="outline"
            >
              Fale Conosco
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
