import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import PROF from '@/images/professora.jpeg';
import SOLAR_PANELS from '@/images/photo-1558449028-b53a39d100fc.avif';
import REDES from '@/images/photo-1521542464131-cb30f7398bc6.avif';
import SOFTWARE from '@/images/software.jpg';
import TRANSMISSOES from '@/images/camera.jpg';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const styles = {
  title: 'text-5xl md:text-6xl text-center',
  carousel: 'w-[80%] md:w-[600px]',
  container: 'text-primary flex-col section-container',
  mainDiv: 'w-full flex place-content-center',
  img: 'aspect-square justify-center min-w-[190px] md:max-w-[500px] h-auto mt-8 mb-3',
  itemText: 'text-xl md:text-3xl flex text-center',
  carouselItem: 'content center items-center justify-center flex flex-col',
};

const SEP = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      <span className={styles.title}>Soluções e Produtos</span>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className={styles.carousel}
      >
        <CarouselContent>
          <CarouselItem className={styles.carouselItem}>
            <img src={PROF} alt="prof" className={styles.img} />
            <span className={styles.itemText}>
              Interatividade em sala de aula
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={SOLAR_PANELS} alt="SOLAR_PANELS" className={styles.img} />
            <span className={styles.itemText}>Painéis de Energia solar</span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={REDES} alt="redes" className={styles.img} />
            <span className={styles.itemText}>Redes de Computadores</span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={SOFTWARE} alt="soft" className={styles.img} />
            <span className={styles.itemText}>Desenvolvimento de Software</span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={TRANSMISSOES} alt="transmissoes" className={styles.img} />
            <span className={styles.itemText}>Transmissões Ao Vivo</span>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
));

export default SEP;
