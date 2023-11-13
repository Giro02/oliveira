import React from "react";
import "../styles/atua.css";
import AtuacaoCards from "./atuacaoCards";

export default function atuacao_inicial() {
  return (
    <div className="bg-no-repeat bg-center bg-cover pt-32 flex justify-center bg-color-black2">
      <div className="flex flex-col">
        <div className=" flex items-center">
          <h1 className="text-color-clicado font-bold font-serif text-5xl px-4">
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
            back="Oferecemos um conjunto abrangente de serviços especializados em Inventário, incluindo:Assessoria de Sucessões; Inventário Extrajudicial; Partilha de Bens; Testamentos e Planejamento Sucessório; Resolução de Disputas; entre outros.
            "
            TituloBack="Inventário"
          ></AtuacaoCards>
          <AtuacaoCards
            TituloFront="Causas de familia
            "
            numero="03"
            front="Na área de Causas de Família, nosso escritório de advocacia está comprometido em fornecer suporte legal abrangente e sensível para indivíduos e famílias que enfrentam desafios pessoais e jurídicos em questões familiares. 
            "
            back="Nosso objetivo é ajudar as famílias a encontrar soluções que respeitem seus valores e interesses, promovendo a estabilidade e o bem-estar das partes envolvidas.

          "
            TituloBack="Causas de familia"
          ></AtuacaoCards>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-14">
          <AtuacaoCards
            TituloFront="Direito do consumidor e indenização
            "
            numero="04"
            front="Na área de Direito do Consumidor e Indenizações, nosso escritório de advocacia tem como foco a proteção dos direitos dos consumidores e a busca de compensações justas em casos de danos ou prejuízos.
            "
            back="Nosso compromisso é garantir que os consumidores sejam devidamente protegidos e que recebam indenizações justas quando seus direitos são violados. Da mesma forma, auxiliamos empresas a enfrentar questões de responsabilidade civil e a adotar práticas comerciais que estejam em conformidade com as leis de proteção ao consumidor.
          "
            TituloBack="Direito do consumidor e indenização"
          ></AtuacaoCards>

          <AtuacaoCards
            TituloFront="Assesoria juridica continua
            "
            numero="05"
            front="Nossa assessoria jurídica contínua é um serviço essencial que oferecemos para empresas e indivíduos, garantindo que você tenha acesso a orientação jurídica regular e especializada em uma variedade de áreas do direito.  
            "
            back="Nossa missão é tornar o processo de inventário o mais tranquilo e eficiente possível para nossos clientes, aliviando o ônus emocional e simplificando as complexidades legais. Com nossa experiência e dedicação, estamos preparados para auxiliar famílias e indivíduos em todas as etapas do processo de inventário, proporcionando clareza e orientação durante um momento desafiador.


          "
            TituloBack="Assesoria juridica continua
            "
          ></AtuacaoCards>
          <AtuacaoCards
            TituloFront="Registro de marca

            "
            numero="07"
            front="O registro de marca é um serviço crucial que oferecemos para proteger a identidade e a propriedade intelectual de empresas e indivíduos.
            "
            back="O registro de marca é fundamental para proteger a reputação e o valor da sua marca. Nossa equipe de advogados especializados em propriedade intelectual está preparada para guiá-lo através do processo de registro, garantindo que sua marca seja devidamente protegida.
          "
            TituloBack="Registro de marca
            "
          ></AtuacaoCards>
        </div>
      </div>
    </div>
  );
}
