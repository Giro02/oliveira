import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs"




interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Arrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", right:"25px"
      ,color:"black"
    }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <Arrow/>,
  prevArrow: <PrevArrow/>,

};

export default function Carousel() {
  return (
    
    <Slider {...settings}>
    <div className="flex items-center justify-center font-serif">
      <div className="flex items-center">
        <img
          className="bg-cover bg-no-repeat"
          src="../static/aa5.png"
          alt="Imagem do carrossel"
        />
        <div className="absolute sm:pl-6 lg:pl-8 xl:pl-52">
          <div className="text-color-clicado
           p-2 
           w-auto sm:w-auto font-bold md:text-2xl xl:text-2xl pl-2 mb-[-14px]
           ">
            Atendimento especializado
          </div>
          <div className="text-color-white font-bold 
          md:text-base sm:w-auto pt-4 ml-2 w-36 text-xs lg:text-xl  xl:text-2xl 2xl:text-3xl
          ">
            Resolução de problemas na medida correta
          </div>
          <Button className=" w-72 h-8 ml-8 px-6 mt-4 rounded-full 
          flex flex-row items-center justify-center transition-all ease-in
          sm:ml-0 sm:w-auto
          xl:text-lg lg:text-base
          xl:h-[60px] lg:h-14 
          md:text-sm md:h-12
          

           bg-color-clicado/90 text-color-black2 
           
           shadow-md
            hover:text-color-white
            hover:bg-color-clicado/80 border-color-black2 ">
            Quero Solucionar meus problemas
            <BsFillArrowRightCircleFill className="h-4 w-auto md:h-6 xl:h-8  ml-5" />
          </Button>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-left relative ">
        <img
          className="bg-cover bg-no-repeat"
          src="../static/aa5.png"
          alt="Imagem do carrossel"
        />
        <div className="absolute sm:pl-6 lg:pl-8 xl:pl-52">
          <div className="text-color-clicado
           p-2 
           w-auto sm:w-auto font-bold md:text-2xl xl:text-2xl pl-2 mb-[-14px]">
            Atendimento especializado
          </div>
          <div className="text-color-white font-bold 
          md:text-base sm:w-auto pt-4 ml-2 w-36 text-xs lg:text-xl  xl:text-2xl 2xl:text-3xl">
            Resolução de problemas na medida correta
          </div>
          <Button className=" w-72 h-8 ml-8 px-6 mt-4 rounded-full 
          flex flex-row items-center justify-center transition-all ease-in
          
          sm:ml-0 sm:w-auto
          xl:text-lg lg:text-base
          xl:h-[60px] lg:h-14 
          md:text-sm md:h-12
          

           bg-color-black2/95 text-color-clicado/70  
            hover:text-color-white
            hover:bg-color-clicado/80 border-2 border-color-clicado/50">
            Quero Solucionar meus problemas
            <BsFillArrowRightCircleFill className="h-4 w-auto md:h-6 xl:h-8  ml-5" />
          </Button>
        </div>
      </div>
    </div>
  </Slider>
      
  ) 
}
