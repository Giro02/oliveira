import React from "react";
import VectorsEscolha from "./VectorsEscolha";
import { VscLaw } from "react-icons/vsc";
import { ImHammer2 } from "react-icons/im";
import { BsBank } from "react-icons/bs";
import { GiHandcuffs } from "react-icons/Gi";
import a from "../images/LogoVertical.png";

export default function escritorio_inst() {
  return (
    <div className="flex items-center font-lato justify-center">
      <div className="bg-color-white py-12 px-6 md:px-24">
        <h1 className="text-color-clicado font-bold text-5xl font-serif">
          Por Que Somos A Opção Ideal?
        </h1>
        <div className="h-1 w-24 border-b border-color-clicado mt-4"></div>
        <p className="text-color-black2 max-w-[800px] mt-8">
          Na Sociedade de Advogados Oliveira Severo promovemos uma abordagem
          única e visionária para solucionar desafios complexos. Nossa paixão
          reside em desvendar oportunidades e em liberar o potencial de
          resultados impressionantes. Valorizamos a jornada de cada cliente e
          compreendemos que nenhum caso é igual.
        </p>

        <VectorsEscolha
          icon=<VscLaw className="h-12 w-12" />
          texto="Nossas soluções são concebidas de maneira personalizada, através de uma análise minuciosa de cada problema, assegurando a obtenção da solução mais brilhante possível. Cada desafio se revela uma oportunidade para inovação."
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<ImHammer2 className="h-12 w-12 rotate-90" />
          texto="Nossos clientes são nossa bússola, e compreendemos minuciosamente suas necessidades particulares, adaptando nossos esforços em consonância com tais demandas.
"
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<BsBank className="h-12 w-12" />
          texto="Sem rodeios, estamos cientes de que a urgência muitas vezes dita o curso das ações. Assim, asseguramos a máxima celeridade em nossos serviços, proporcionando respostas rápidas e eficazes.
          "
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<GiHandcuffs className="h-12 w-12" />
          texto="Contamos com uma equipe de visionários e peritos, prontos para acolher suas necessidades específicas, compreendendo e moldando cada desafio de forma singular em direção a um relato de sucesso inigualável."
        ></VectorsEscolha>
      </div>
      <div></div>
    </div>
  );
}
