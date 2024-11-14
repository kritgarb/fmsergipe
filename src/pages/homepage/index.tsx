import QuemSomos from '@/sections/quemSomos';
import Conecte from '@/sections/conecte';
import ButtonGroupToolbar from '@/components/ButtonGroupToolbar';
import SEP from '@/sections/SEP';
import FaleConosco from '@/sections/faleconosco';
import Outdoor from '@/sections/outdoor';
import React, { useEffect, useRef } from 'react';
import Footer from '@/sections/footer';
import Parceiros from '@/sections/parceiros';

export default function HomePage() {
  const outdoorRef = useRef<HTMLDivElement>(null);
  const quemsomosRef = useRef<HTMLDivElement>(null);
  const conecteseRef = useRef<HTMLDivElement>(null);
  const sepRef = useRef<HTMLDivElement>(null);
  const faleConoscoRef = useRef<HTMLDivElement>(null);
  const parceirosRef = useRef<HTMLDivElement>(null);

  //função para fazer os botões do menu superior navegarem

  const scrollToRef = (section: string) => {
    let targetSection;
    switch (section) {
      case 'outdoor':
        targetSection = outdoorRef.current;
        break;
      case 'quemsomos':
        targetSection = quemsomosRef.current;
        break;
      case 'conectese':
        targetSection = conecteseRef.current;
        break;
      case 'sep':
        targetSection = sepRef.current;
        break;
      case 'faleconosco':
        targetSection = faleConoscoRef.current;
        break;
      case 'parceiros':
        targetSection = parceirosRef.current;
        break;
      default:
        targetSection = null;
    }
    if (targetSection) {
      const topOffset =
        targetSection.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else {
      console.error('Target section not found:', section);
    }
  };

  return (
    <div className="w-full">
      <ButtonGroupToolbar scrollToRef={scrollToRef}></ButtonGroupToolbar>
      <Outdoor ref={outdoorRef} />
      <SEP ref={sepRef} />
      <Conecte ref={conecteseRef} />
      <QuemSomos ref={quemsomosRef} />
      <Parceiros ref={parceirosRef} />
      <FaleConosco ref={faleConoscoRef} />
      <Footer />
    </div>
  );
}
