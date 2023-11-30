import React, { useState } from "react";
import "../styles/Faq.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function PergFreq() {
  const SizeIcon = "20px";
  const faqBox =
    "cursor-pointer border border-color-cinza border-t-0 py-2 px-4 flex justify-between gap-2 items-center";
  const text1 =
    "Para agendar uma consulta, você pode entrar em contato conosco por telefone ou por meio do nosso site. Estamos disponíveis para atender suas necessidades e agendar um horário que seja conveniente para você.";
  const text2 =
    "Embora seja sempre bem-vindo em nosso escritório, entendemos que nem todos podem vir pessoalmente. Oferecemos a opção de consultas online, permitindo que discutamos o seu caso no conforto da sua casa ou escritório.";
  const text3 =
    "Sim, temos advogados de plantão fora do horário comercial para atender a emergências legais. Você pode nos contatar a qualquer momento, garantindo que sua questão seja tratada prontamente.";
  const text4 =
    "Os custos podem variar dependendo dos serviços específicos que você precisa. Recomendamos entrar em contato conosco para discutir suas necessidades e forneceremos informações detalhadas sobre os custos associados.";
  const text5 =
    "Mantenha-se informado sobre o andamento do seu caso através de reuniões regulares agendadas conosco. Além disso, nossa equipe está disponível para responder a quaisquer dúvidas que possam surgir durante o processo.";
  const text6 =
    "Atendemos tanto a questões corporativas quanto a assuntos pessoais. Nossa equipe jurídica é versátil e qualificada para lidar com uma ampla gama de casos legais, atendendo às necessidades individuais e empresariais.";
  const text7 =
    "A confidencialidade é uma prioridade para nós. Todos os detalhes e informações compartilhados durante as consultas e tratamento do caso são tratados com a máxima discrição e respeito à privacidade.";
  const text8 =
    "Ao pedir demissão, você tem direitos, incluindo salário proporcional do mês, 13º salário proporcional e férias proporcionais. Recomendamos consultar um advogado para esclarecimentos adicionais, pois existem exceções à regra.";
  const text9 =
    "Buscamos resolver litígios de maneira amigável sempre que possível, através de negociações e mediações. Isso ajuda a economizar tempo e recursos, proporcionando uma solução mais rápida e eficiente.";
  const text10 =
    "Sim, nossa equipe jurídica possui experiência em questões de propriedade intelectual. Podemos fornecer consultoria e assistência para proteger seus direitos autorais, marcas registradas e patentes. Entre em contato para mais informações sobre nossos serviços nessa área.";

  type FaqProp = {
    [key: string]: boolean;
  };
  const [Faq, setFaq] = useState<FaqProp>({
    Faq1: false,
    Faq2: false,
    Faq3: false,
    Faq4: false,
    Faq5: false,
    Faq6: false,
    Faq7: false,
    Faq8: false,
    Faq9: false,
    Faq10: false,
  });
  type ItemProps = {
    Name: string;
  };

  function setToggle({ Name }: ItemProps) {
    setFaq((prevFaq) => {
      const copy = { ...prevFaq };
      copy[Name] === true ? (copy[Name] = false) : setter(copy, Name);

      return copy;
    });
  }
  function setter(copy: FaqProp, Name: string) {
    Object.keys(Faq).forEach((chave) => {
      copy[chave] = false;
    });

    copy[Name] = true;
    return copy;
  }
  return (
    <div className="flex justify-center my-32">
      <div className="flex flex-col justify-center p-4 max-w-2xl font-lato ">
        <div className="flex items-center gap-4 mb-8">
          <div className="border-b border-color-clicado w-full h-1 "></div>
          <div className="text-lg text-color-clicado font-lato">FAQ</div>
          <div className="border-b border-color-clicado w-full h-1"></div>
        </div>
        <div className="text-color-black font-bold font-serif text-5xl px-4">
          Perguntas Frequentes
        </div>
        <div
          className="cursor-pointer border border-color-cinza  py-2 px-4 mt-20 flex justify-between"
          onClick={() => {
            setToggle({ Name: "Faq1" });
          }}
          style={{ color: Faq.Faq1 ? "#C39F76" : "black" }}
        >
          1. Como posso agendar uma consulta com um dos advogados da empresa?
          <div>
            {Faq.Faq1 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq1 ? (
          <div className="Fade">{text1}</div>
        ) : (
          <div className="Fade-out">{text1}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq2" });
          }}
          style={{ color: Faq.Faq2 ? "#C39F76" : "black" }}
        >
          2. Preciso ir até o escritório para tratar do meu caso?
          <div>
            {Faq.Faq2 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        <div>
          {Faq.Faq2 ? (
            <div className="Fade">{text2}</div>
          ) : (
            <div className="Fade-out">{text2}</div>
          )}
        </div>

        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq3" });
          }}
          style={{ color: Faq.Faq3 ? "#C39F76" : "black" }}
        >
          3. Posso contar com a assistência de um advogado fora do horário
          comercial?
          <div>
            {Faq.Faq3 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq3 ? (
          <div className="Fade">{text3}</div>
        ) : (
          <div className="Fade-out">{text3}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq4" });
          }}
          style={{ color: Faq.Faq4 ? "#C39F76" : "black" }}
        >
          4. Quais são os custos envolvidos em contratar os serviços de
          assessoria jurídica contínua?
          <div>
            {Faq.Faq4 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq4 ? (
          <div className="Fade">{text4}</div>
        ) : (
          <div className="Fade-out">{text4}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq5" });
          }}
          style={{ color: Faq.Faq5 ? "#C39F76" : "black" }}
        >
          5. Como posso obter informações sobre o andamento do meu caso?
          <div>
            {Faq.Faq5 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq5 ? (
          <div className="Fade">{text5}</div>
        ) : (
          <div className="Fade-out">{text5}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq6" });
          }}
          style={{ color: Faq.Faq6 ? "#C39F76" : "black" }}
        >
          6. Vocês lidam apenas com casos corporativos ou também atendem a
          questões pessoais?
          <div>
            {Faq.Faq6 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq6 ? (
          <div className="Fade">{text6}</div>
        ) : (
          <div className="Fade-out">{text6}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq7" });
          }}
          style={{ color: Faq.Faq7 ? "#C39F76" : "black" }}
        >
          7. Como posso garantir a confidencialidade das informações que
          compartilho com a equipe jurídica?
          <div>
            {Faq.Faq7 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq7 ? (
          <div className="Fade">{text7}</div>
        ) : (
          <div className="Fade-out">{text7}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq8" });
          }}
          style={{ color: Faq.Faq8 ? "#C39F76" : "black" }}
        >
          8. Quais são os direitos ao pedir demissão do meu emprego?
          <div>
            {Faq.Faq8 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq8 ? (
          <div className="Fade">{text8}</div>
        ) : (
          <div className="Fade-out">{text8}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq9" });
          }}
          style={{ color: Faq.Faq9 ? "#C39F76" : "black" }}
        >
          9. Como posso resolver litígios de forma amigável, sem recorrer a
          processos judiciais demorados?
          <div>
            {Faq.Faq9 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq9 ? (
          <div className="Fade">{text9}</div>
        ) : (
          <div className="Fade-out">{text9}</div>
        )}
        <div
          className={faqBox}
          onClick={() => {
            setToggle({ Name: "Faq10" });
          }}
          style={{ color: Faq.Faq10 ? "#C39F76" : "black" }}
        >
          10. Vocês oferecem serviços de consultoria em questões de propriedade
          intelectual?
          <div>
            {Faq.Faq10 ? (
              <IoIosArrowUp size={SizeIcon}></IoIosArrowUp>
            ) : (
              <IoIosArrowDown size={SizeIcon}></IoIosArrowDown>
            )}
          </div>
        </div>
        {Faq.Faq10 ? (
          <div className="Fade">{text10}</div>
        ) : (
          <div className="Fade-out">{text10}</div>
        )}
      </div>
    </div>
  );
}
