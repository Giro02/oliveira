import React, { PropsWithChildren, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/carousel.css";
// import "../style/foto.css"
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Transform } from "stream";
// import  Arrows  from "../components/arrows_Carrousel"
import imagem1 from "../../assets/escritorio.jpg";
import imagem2 from "../../assets/lawyer.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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
     <button onClick={scrollPrev} className="w-8 z-50 h-8 flex items-center justify-center bg-color-white text-color-black absolute left-0 top-1/2 -translate-y-1/2 ">
        <BiChevronLeft/>
      </button>
      <button onClick={scrollNext} className="w-8 z-50 h-8 flex items-center justify-center bg-color-white text-color-black absolute right-0 top-1/2 -translate-y-1/2">
        <BiChevronRight/>
      </button>
      <div className="z-50  bottom-8 absolute left-1/2 flex justify-center items-center gap-4">
      <div className={selected === 0 ? 'h-5 w-5 rounded-full shadow-md bg-color-verde' : 'h-2 w-2 rounded-full shadow-md bg-color-verde'}></div>
      <div className={selected === 1 ? 'h-5 w-5 rounded-full shadow-md bg-color-verde' : 'h-2 w-2 rounded-full shadow-md bg-color-verde'}></div>
      <div className={selected === 2 ? 'h-5 w-5 rounded-full shadow-md bg-color-verde' : 'h-2 w-2 rounded-full shadow-md bg-color-verde'}></div>
      </div>
    <div className="embla" ref={emblaRef}>
     
     <div className="embla__container">
        <div className="embla__slide">
          <Item image={imagem1}>Test e1231231</Item>
        </div>
        <div className="embla__slide">
          <Item image={imagem2}>Test e1231231</Item>
        </div>
        <div className="embla__slide">
          <Item image={imagem1}>Test e1231231</Item>
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
      className="bg-cover bg-center relative w-screen h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
