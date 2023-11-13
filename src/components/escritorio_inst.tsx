import React from "react";
import escritorio from "../images/escritorio.png";
import VectorsEscolha from "./VectorsEscolha";
import { VscLaw } from "react-icons/vsc";
import { ImHammer2 } from "react-icons/im";
import { BsBank } from "react-icons/bs";
import { GiHandcuffs } from "react-icons/gi";
import logo from "../images/Logo com fundo preto.png";

export default function escritorio_inst() {
  return (
    <div className="flex items-center font-lato justify-center">
      <div className="bg-color-white py-12 px-6 md:px-24">
        <h1 className="text-color-clicado font-bold text-5xl font-serif">
          Porque nos escolher?
        </h1>
        <div className="h-1 w-24 border-b border-color-clicado mt-4"></div>
        <p className="text-color-black2 max-w-[800px] mt-8">
          A Sociedade de Advogados Oliveira Severo atua a mais de 25 anos na
          área de Assessoria Jurídica e Contencioso. Prezando pela ética e
          eficiência nos seus contratos de prestações de serviços advocatícios,
          atualmente o escritório conta com três advogados e um estagiário, que
          estão disponíveis para eventuais demandas.
        </p>
        <p className="text-color-black2 max-w-[800px] mt-4">
          Nós prezamos pela prestação personalizada e modernizada do serviço
          jurídico, com foco na prevenção de riscos e no consequente alcance de
          resultados. O escritório se compromete com a excelência no atendimento
          aos nossos clientes e entende que cada caso deve ser
          tratado de forma única.
        </p>
        <VectorsEscolha
          icon=<VscLaw className="h-12 w-12" />
          texto="Soluções específicas, analisando caso a caso de forma criteriosa, para que a melhor solução possível seja alcançada."
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<ImHammer2 className="h-12 w-12 rotate-90" />
          texto="Soluções específicas, analisando caso a caso de forma criteriosa, para que a melhor solução possível seja alcançada."
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<BsBank className="h-12 w-12" />
          texto="Soluções específicas, analisando caso a caso de forma criteriosa, para que a melhor solução possível seja alcançada."
        ></VectorsEscolha>
        <VectorsEscolha
          icon=<GiHandcuffs className="h-12 w-12" />
          texto="Soluções específicas, analisando caso a caso de forma criteriosa, para que a melhor solução possível seja alcançada."
        ></VectorsEscolha>
      </div>
      <div></div>
    </div>
  );
}
