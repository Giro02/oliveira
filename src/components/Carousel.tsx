import React, { PropsWithChildren, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/carousel.css";
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Transform } from "stream";
import imagem1 from "../../assets/slide1.jpg";
import imagem2 from "../../assets/slide2.jpg";
import imagem3 from "../../assets/slide3.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Botao from '../components/botao'

export const EmblaCarousel = () => {
  const [selected, setSelected] = useState(0);
  const [emblaRef,emblaApi] = useEmblaCarousel({
    loop:true
  });
  const onSelect = useCallback((emblaApi) => {
   setSelected(emblaApi.selectedScrollSnap());
  }, [])

  const removeOnSelectListener = useCallback(() => {
    if (emblaApi) emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])
 
   

  const scrollPrev = useCallback(() => {
    
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative"> 
     <button onClick={scrollPrev} className="w-12 z-50 h-12 flex items-center justify-center bg-color-clicado/70 text-color-black absolute left-0 top-1/2 -translate-y-1/2 ">
        <BiChevronLeft size={28}></BiChevronLeft>
      </button>
      <button onClick={scrollNext} className="w-12 z-50 h-12 flex items-center justify-center bg-color-clicado/70 text-color-black absolute right-0 top-1/2 -translate-y-1/2">
        <BiChevronRight size={28}></BiChevronRight>
      </button>
      <div className="z-50 hidden md:block bottom-8 absolute left-1/2 md:flex justify-center items-center gap-4">
      <div className={selected === 0 ? 'h-3 w-3 rounded-full shadow-md bg-color-clicado' : 'h-2 w-2 rounded-full shadow-md bg-color-black'}></div>
      <div className={selected === 1 ? 'h-3 w-3 rounded-full shadow-md bg-color-clicado' : 'h-2 w-2 rounded-full shadow-md bg-color-black'}></div>
      <div className={selected === 2 ? 'h-3 w-3 rounded-full shadow-md bg-color-clicado' : 'h-2 w-2 rounded-full shadow-md bg-color-black'}></div>
      </div>
    <div className="embla" ref={emblaRef}>
     
     <div className="embla__container">
        <div className="embla__slide">
          <Item image={imagem1}><div className="font-serif ml-12 md:ml-0 lg:mr-96">
            <h1 className="text-color-clicado text-sm md:text-lg lg:text-2xl">Atendimento personalizado</h1>
            <h2 className="text-color-white w-72 md:w-auto text-sm font-bold md:text-lg lg:text-3xl">Advogados especializados em resolução de problemas</h2>
            <a target='_blank' href="https://wa.me/553199788997?text=Quero discutir meu caso. Podemos conversar?"><Botao>Quero solucionar os meus problemas</Botao></a>
            </div></Item>
        </div>
        <div className="embla__slide">
          <Item image={imagem2}><div className="font-serif ml-12 md:ml-0 lg:mr-96">
            
            <h2 className="text-color-white md:w-auto text-sm max-w-[200px] font-bold md:text-lg lg:text-6xl">Justiça para você</h2>
            <h1 className="text-color-clicado text-sm md:text-lg lg:text-2xl">Expertise em direito ao seu favor</h1>
            <a target='_blank' href="https://wa.me/553199788997?text=Quero discutir meu caso. Podemos conversar?"><Botao>Consultoria sem compromisso</Botao></a>
            </div>
            
          </Item>
        </div>
        <div className="embla__slide">
          <Item image={imagem3}>Test e1231231</Item>
        </div>
      </div> 

     
    </div>
    </div>
  );
};

type ItemProps = PropsWithChildren<{
  image: string;
}>;

function Item({ image, children }: ItemProps) {
  return (
    <div
      className="bg-cover bg-center relative w-full aspect-2.4/1 flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
