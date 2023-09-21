import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../styles/carousel.css"
import imagem from "./../images/aa.png";
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useState } from 'react'
import { Transform } from 'stream';
// import  Arrows  from "../components/arrows_Carrousel"


export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();
  
  const [slide, setslide] = useState('translate3d(0px, 0px, 0px)');

  const mudabackground = () =>{
    console.log(slide);
    setslide('translate3d(-1903px, 0px, 0px)');
  }

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container" style = {{transform: slide}}>
        <div className="embla__slide ">
          <div className='font-serif'>
            
            <img src={imagem} className='relative overflow-hidden' width="500" height="300"></img>
            <div className='absolute top-6 left-4 md:top-28 md:left-16 lg:left-32 lg:top-44 xl:top-56 xl:left-48 2xl:top-[310px] 2xl:left-80'>
              <div className='text-base md:text-2xl text-color-clicado'>Atendimento personalizado</div>
              <div className='w-44 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-3xl text-color-white font-black'>Advogados especializados em resolução de problemas </div>
              <Button className="absolute shadow-md w-[260px] md:w-auto py-2 mt-6 rounded-full  
              flex flex-row items-center px-4 
                      bg-color-clicado/90
                      text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                      hover:text-color-white
                      hover:bg-color-clicado "
                      >Quero solucionar os meus problemas
                      <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                      </Button>
              
            </div>
            {/* <div>
              
                <BsFillArrowRightCircleFill onClick={mudabackground}  className=" absolute cursor-pointer top-12 left-12 h-8 w-auto ml-5" />
              </div> */}
          </div>
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}







