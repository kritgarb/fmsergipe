import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import ADJAN from '@/images/adjan souza.png';
import RICARDO from '@/images/ricardo pop.png';
import SILVIO from '@/images/silvio silvetta.png';
import EDILSON from '@/images/edilson vieira.png';
import FABIOG from '@/images/fábio Gama.png';
import FABIOP from "@/images/fabio pan.png";
import ADRIANA from "@/images/adriana amada.png"
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const styles = {
  title: 'text-5xl md:text-6xl text-center text-black',
  carousel: 'w-[80%] md:w-[600px]',
  container: 'text-black flex-col section-container',
  mainDiv: 'w-full bg-[#f9f9f9] flex place-content-center',
  img: 'aspect-square justify-center min-w-[210px] md:max-w-[500px] h-auto mt-8 mb-3',
  itemText: 'text-xl md:text-3xl flex text-center text-black',
  SubitemText: 'text-lg md:text-xl flex text-center text-black',
  carouselItem: 'content center items-center justify-center flex flex-col',
};

const SEP = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className={styles.mainDiv}>
    <div className={styles.container}>
      <span className={styles.title}>Equipe</span>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className={styles.carousel}
      >
        <CarouselContent>
          <CarouselItem className={styles.carouselItem}>
            <img src={ADJAN} alt="adjan" className={styles.img} />
            <span className={styles.itemText}>
              Adjan Souza
            </span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={RICARDO} alt="ricardo" className={styles.img} />
            <span className={styles.itemText}>Ricardo Pop</span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={SILVIO} alt="silvio" className={styles.img} />
            <span className={styles.itemText}>Silvio Silvetta</span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={EDILSON} alt="edilson" className={styles.img} />
            <span className={styles.itemText}>Edilson Vieira</span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={FABIOG} alt="fabiog" className={styles.img} />
            <span className={styles.itemText}>Fábio Gama</span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={FABIOP} alt="fabiop" className={styles.img} />
            <span className={styles.itemText}>Fábio Pan</span>
            <span className={styles.SubitemText}>
              Eu sou Brabo
            </span>
          </CarouselItem>
          <CarouselItem className={styles.carouselItem}>
            <img src={ADRIANA} alt="adriana" className={styles.img} />
            <span className={styles.itemText}>Adriana Amada</span>
            <span className={styles.SubitemText}>
              Eu sou Braba
            </span>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
));

export default SEP;
