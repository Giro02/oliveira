import React from "react";
import mapa from "../images/mapasemlogo.png";

export default function localizacao_inst() {
  return (
    <div>
      <div className="flex items-center font-serif justify-around py-8">
        <div>
          <img
            className="bg-cover bg-center hidden xl:block w-full"
            src={mapa}
          ></img>
        </div>
        <div className="bg-color-white py-12 px-6 md:px-24">
          <h1 className="text-color-clicado font-bold text-4xl">
            De Belo Horizonte para todo o Brasil.
          </h1>
          <h1 className="text-color-black2 max-w-[800px] mt-8 font-lato">
            O escritório de advocacia com sede em Belo Horizonte é um exemplo
            notável de sucesso e dedicação à justiça. Estrategicamente
            localizado na capital de Minas Gerais, nosso escritório se destaca
            como um centro de excelência jurídica, atendendo clientes de todas
            as regiões do Brasil. Nossa equipe de advogados altamente
            qualificados é reconhecida por fornecer serviços jurídicos de
            primeira qualidade em diversas áreas do direito, que abrangem desde
            direito empresarial e civil até direito trabalhista e tributário.
          </h1>
          <h1 className="text-color-black2 max-w-[800px] mt-8 font-lato">
            Atuamos de maneira abrangente, adaptando nosso trabalho às
            necessidades específicas de cada cliente. Nossa abordagem eficaz se
            concentra não apenas na resolução de problemas, mas também na
            prevenção de futuros litígios. No cerne de nossa atuação, adotamos
            uma abordagem de advocacia humanizada, moderna, transparente,
            responsável e direta. Esses são os principais pilares que nos
            diferenciam e nos destacam como um parceiro jurídico de confiança e
            comprometido com a busca da justiça.
          </h1>
        </div>
      </div>
    </div>
  );
}
