import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../styles/carousel.css"
// import "../style/foto.css"
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
        <div className="embla__slide min-h-[700px] font-serif">
          <div className="foto_slide1 bg-color-black/20 h-full w-full flex items-center justify-center flex-col">
          <div className='text-base font-extrabold md:text-3xl text-color-clicado'>Assistência individualizada</div>
              <div className='w-20 mt-6 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-6xl text-color-white font-black'>Justiça para você</div>
              <a target='_blank' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md w-auto md:w-auto py-2 mt-6 rounded-full  
              flex flex-row items-center px-4 
                      bg-color-clicado/90
                      text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                      hover:text-color-white
                      hover:bg-color-clicado "
                      >Consultoria sem compromisso
                      <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                      </Button></a>
                      <div className='mt-12 text-base md:text-2xl text-color-white'>Expertise em direito</div>
          
          </div>
        </div>
        <div className="embla__slide font-serif">
          <div className="foto_slide2 bg-color-black/20 h-full w-full flex items-center justify-center flex-col">
          <div className='text-base font-extrabold md:text-3xl text-color-clicado'>Assistência individualizada</div>
              <div className='w-20 mt-6 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-6xl text-color-white font-black'>Justiça para você</div>
              <a target='_blank' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md w-auto md:w-auto py-2 mt-6 rounded-full  
              flex flex-row items-center px-4 
                      bg-color-clicado/90
                      text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                      hover:text-color-white
                      hover:bg-color-clicado "
                      >Consultoria sem compromisso
                      <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                      </Button></a>
                      <div className='mt-12 text-base md:text-2xl text-color-white'>Expertise em direito</div>
          </div>
        </div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}







