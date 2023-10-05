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
          <div className="foto_slide1 bg-color-black/20 h-full w-full flex items-center flex-row">
            <div className='ml-96'>
              <div className=' text-base font-extrabold md:text-3xl text-color-clicado'>Atendimento personalizado</div>
                <div className='w-20 mt-6 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-3xl text-color-white font-black'>Advogados especializados em resolução de problemas</div>
                <a target='_blank' className='w-400px' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md py-2 mt-4 rounded-full  
                flex flex-row items-center px-4 
                        bg-color-clicado/90
                        text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                        hover:text-color-white
                        hover:bg-color-clicado "
                        >Quero solucionar os meus problemas
                        <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                        </Button></a>
              </div>
            </div>
        </div>
        <div className="embla__slide font-serif">
          <div className="foto_slide2 bg-color-black/20 h-full w-full flex justify-center flex-col">
            <div className="ml-96">
            <div className='text-base font-extrabold md:text-3xl text-color-clicado'>Justiça para você </div>
              <div className='w-20 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-4xl text-color-white font-black mt-6'>Conhecimento Jurídico a Seu Favor</div>
              <a target='_blank' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md w-auto md:w-auto py-2 mt-4 rounded-full  
              flex flex-row items-center px-4 
                      bg-color-clicado/90
                      text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                      hover:text-color-white
                      hover:bg-color-clicado "
                      >Consultoria sem compromisso
                      <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                      </Button></a>
          </div>
            </div>
          
        </div>
        <div className="embla__slide"><div className="font-serif foto_slide3 bg-color-black/20 h-full w-full flex justify-center flex-col">
          <div className='ml-96'>
          <div className='text-base font-extrabold md:text-3xl text-color-clicado'>Estamos Aqui por Você</div>
              <div className='w-20 md:w-auto text-xs md:text-xl lg:text-2xl  2xl:text-4xl text-color-white font-black mt-6'>De Belo Horizonte Para todo o Brasil</div>
              <a target='_blank' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md mt-4 py-2 rounded-full  
              flex flex-row items-center px-4 
                      bg-color-clicado/90
                      text-color-black2 md:text-base lg:text-base xl:text-lg transition-all ease-in
                      hover:text-color-white
                      hover:bg-color-clicado "
                      >Entre em contato conosco
                      <BsFillArrowRightCircleFill className="h-4 md:h-6 xl:h-8 w-auto ml-5" />
                      </Button></a>
                      {/* <div className='mt-12 text-base md:text-2xl text-color-white'>Expertise em direito</div> */}
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}







