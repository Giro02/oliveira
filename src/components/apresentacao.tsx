import React from "react";
import { Link } from "gatsby";
import { Button } from "@material-tailwind/react";
import mao from "../images/mao800.png";

export default function Apresentacao() {
  return (
    <div className="flex flex-col bg-color-white items-center gap-28 xl:flex-row ">
      <div className="justify float-left xl:block hidden">
        <img className="bg-cover bg-no-repeat " src={mao}></img>
      </div>

      <div className="flex flex-col max-w-lg py-16 xl:rounded-md px-8">
        <div>
          <h1 className=" font-bold text-4xl text-color-clicado font-serif">
            Apresentação institucional
          </h1>
        </div>
        <div>
          <h1 className=" text-color-black2 mt-10  text-md text-base font-lato">
            Acreditamos que a prevenção e a educação jurídica é a melhor forma
            de advogar para uma empresa inovadora!
          </h1>
          <h1 className=" text-color-black2 mt-8  text-md  text-base font-lato">
            Somos um escritório de advocacia fundado em 1998. Nossa missão é
            ajudar empresas e empreendedores a lidar melhor com o Direito. Nosso
            papel é impedir que a falta de conhecimento jurídico atrapalhe o
            potencial de crescimento do seu negócio e de seus clientes.
          </h1>
          <h1 className=" text-color-black2 mt-8  text-md  text-base font-lato">
            Acreditamos que a prevenção e a educação jurídica é a melhor forma
            de Advocacia! E que o Direito deve ser transmitido de maneira
            democrática e simples para o empreendedor!
          </h1>
          <Link to="/Institucional">
            <Button
              className="shadow-md w-[250px] h-[50px] mt-8 rounded-full 
                    bg-color-clicado/90
                    text-color-black2 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado 
                    
                    font-serif
                    shadow-color-black2/50
                     "
            >
              Veja mais
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
