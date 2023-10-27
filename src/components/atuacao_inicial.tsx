import React from "react";
import { Link } from "gatsby";
import "../styles/atua.css";
import { MdFamilyRestroom } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { MdWork } from "react-icons/md";
import { FaSackDollar, FaHandHoldingDollar, FaAward } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/Gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AtuacaoCards from "./atuacaoCards";

export default function atuacao_inicial() {
  return (
    <div className="bg-no-repeat bg-center bg-cover pt-32 flex justify-center bg-color-black2">
      <div className="flex flex-col">
        <div className=" flex items-center">
          <h1 className="text-color-clicado font-medium font-serif text-6xl px-4">
            Áreas de atuação
          </h1>
        </div>
        <div className="h-1 w-32 border-b border-color-clicado ml-4 mt-8"></div>
        <div className="flex flex-col mb-10 lg:mb-24 px-4 mt-8">
          <h1 className="text-color-white/70 max-w-[800px] font-lato text-[15px]">
            Advocacia com respeito e individualidade: Nossa equipe de advogados
            comprometidos entende a importância do seu caso. Com experiência em
            várias áreas de atuação, nós lidaremos com seus problemas legais com
            cuidado e profissionalismo.
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-14">
          <AtuacaoCards
            TituloFront="Direito trabalhista"
            numero="01"
            front="Nosso escritório de advocacia possui uma vasta experiência e
          conhecimento na área de Direito Trabalhista, atuando com dedicação
          para proteger os direitos e interesses de trabalhadores e
          empregadores."
            back="Nosso compromisso é oferecer soluções personalizadas e estratégicas em questões trabalhistas, buscando a melhor abordagem para atender às necessidades específicas de cada cliente. Com uma equipe de advogados experientes e especializados em Direito Trabalhista, estamos preparados para lidar com os desafios complexos que essa área pode apresentar, garantindo que nossos clientes estejam bem protegidos e informados.
          "
            TituloBack="Direito trabalhista"
          ></AtuacaoCards>

          <AtuacaoCards
            TituloFront="Inventário"
            numero="02"
            front="Nossa missão é tornar o processo de inventário o mais tranquilo e eficiente possível para nossos clientes, aliviando o ônus emocional e simplificando as complexidades legais. 

            "
            back="Nossa missão é tornar o processo de inventário o mais tranquilo e eficiente possível para nossos clientes, aliviando o ônus emocional e simplificando as complexidades legais. Com nossa experiência e dedicação, estamos preparados para auxiliar famílias e indivíduos em todas as etapas do processo de inventário, proporcionando clareza e orientação durante um momento desafiador.


          "
            TituloBack="Inventário"
          ></AtuacaoCards>
          <AtuacaoCards
            TituloFront="Causas de familia
            "
            numero="03"
            front="Nosso escritório de advocacia possui uma vasta experiência e
            conhecimento na área de Direito Trabalhista, atuando com dedicação
            para proteger os direitos e interesses de trabalhadores e
            empregadores."
            back="Nosso compromisso é oferecer soluções personalizadas e estratégicas em questões trabalhistas, buscando a melhor abordagem para atender às necessidades específicas de cada cliente. Com uma equipe de advogados experientes e especializados em Direito Trabalhista, estamos preparados para lidar com os desafios complexos que essa área pode apresentar, garantindo que nossos clientes estejam bem protegidos e informados.
          "
            TituloBack="Direito trabalhista"
          ></AtuacaoCards>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-14">
          <AtuacaoCards
            TituloFront="Direito trabalhista"
            numero="04"
            front="Nosso escritório de advocacia possui uma vasta experiência e
          conhecimento na área de Direito Trabalhista, atuando com dedicação
          para proteger os direitos e interesses de trabalhadores e
          empregadores."
            back="Nosso compromisso é oferecer soluções personalizadas e estratégicas em questões trabalhistas, buscando a melhor abordagem para atender às necessidades específicas de cada cliente. Com uma equipe de advogados experientes e especializados em Direito Trabalhista, estamos preparados para lidar com os desafios complexos que essa área pode apresentar, garantindo que nossos clientes estejam bem protegidos e informados.
          "
            TituloBack="Direito trabalhista"
          ></AtuacaoCards>

          <AtuacaoCards
            TituloFront="Inventário"
            numero="05"
            front="Nossa missão é tornar o processo de inventário o mais tranquilo e eficiente possível para nossos clientes, aliviando o ônus emocional e simplificando as complexidades legais. 

            "
            back="Nossa missão é tornar o processo de inventário o mais tranquilo e eficiente possível para nossos clientes, aliviando o ônus emocional e simplificando as complexidades legais. Com nossa experiência e dedicação, estamos preparados para auxiliar famílias e indivíduos em todas as etapas do processo de inventário, proporcionando clareza e orientação durante um momento desafiador.


          "
            TituloBack="Inventário"
          ></AtuacaoCards>
          <AtuacaoCards
            TituloFront="Causas de familia
            "
            numero="06"
            front="Nosso escritório de advocacia possui uma vasta experiência e
            conhecimento na área de Direito Trabalhista, atuando com dedicação
            para proteger os direitos e interesses de trabalhadores e
            empregadores."
            back="Nosso compromisso é oferecer soluções personalizadas e estratégicas em questões trabalhistas, buscando a melhor abordagem para atender às necessidades específicas de cada cliente. Com uma equipe de advogados experientes e especializados em Direito Trabalhista, estamos preparados para lidar com os desafios complexos que essa área pode apresentar, garantindo que nossos clientes estejam bem protegidos e informados.
          "
            TituloBack="Direito trabalhista"
          ></AtuacaoCards>
        </div>
        {/* <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-14'> 
                
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdFamilyRestroom className= 'child2 text-color-clicado/90 ' size={80}></MdFamilyRestroom>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito Familiar</h2>

                    <Link to='Areas/familiar'><Button className="
                    tamanho w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    hover:border-color-clicado
                    border-color-clicado/50
                    hover:shadow
                     "
                     >Saiba mais</Button></Link>
                </div> 
                 <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdWork className= 'child2 text-color-clicado/90 ' size={80}></MdWork>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito trabalhista</h2>

                    <Link to='Areas/trabalhista'><Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm 
                    hover:text-color-white
                    hover:bg-color-clicado border-2 transition-all ease-in
                    border-color-clicado/50 "
                     >Saiba mais</Button> </Link> 
                </div>
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <GiReceiveMoney className= 'child2 text-color-clicado/90 ' size={80}></GiReceiveMoney>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito tributário</h2>

                    <Link to='Areas/tributario'><Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm 
                    hover:text-color-white
                    hover:bg-color-clicado border-2 transition-all ease-in
                    border-color-clicado/50 "
                     >Saiba mais</Button></Link>  
                </div>
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <FaAward className= 'child2 text-color-clicado/90 ' size={80}></FaAward>
                    <h2 className='text-color-white/80 child3 text-lg'>Administrativo</h2>

                    <Link to='Areas/administrativo'><Button className=" w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm
                    hover:text-color-white
                    hover:bg-color-clicado border-2 transition-all ease-in
                    border-color-clicado/50 "
                     >Saiba mais</Button> </Link> 
                </div> 
                
                
            </div>  */}
        {/* <Link to='/Areas/familiar'><Button className="shadow-md w-auto py-4 mt-8 rounded-full  
             flex flex-row items-center justify-center px-6 
             bg-color-clicado/90
             text-color-black2 text-lg
             hover:text-color-white
             hover:bg-color-clicado border
             border-color-black2 "
                     >Ver todas as áreas de atuação
                     <BsFillArrowRightCircleFill className="h-8 w-auto ml-5" />
                     </Button>   </Link> */}
      </div>
    </div>
  );
}
