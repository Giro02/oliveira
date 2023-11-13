import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/atua.css";

export default function agende() {
  return (
    <div className="flex jusitfy-center font-serif">
      <div className=" pt-14 bg-cover flex flex-col xl:flex-row  w-screen items-center justify-evenly bg-color-black2">
        <div className="flex items-center p-8 flex-col md:flex-row lg:fl gap-8 xl:gap-16 2xl:gap-24">
          <div>
            <div className="shadow bg-color-blacktrans rounded-lg p-8 max-w-[325px]">
              <div className="text-color-clicado font-bold text-xl">
                Compromisso com os Clientes:
              </div>
              <div className="text-color-white/70 mt-8 font-lato">
                Nossa empresa tem um compromisso inabalável com os interesses
                dos nossos clientes. Estamos aqui para ouvir, entender e atender
                às suas necessidades legais com dedicação e paixão.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:gap-16 2xl:gap-24">
            <div className="shadow bg-gradient-to-b from-color-black to-color-black2 rounded-lg p-8 max-w-[325px]">
              <div className="text-color-clicado font-bold text-xl">
                Atenção Personalizada:
              </div>
              <div className="text-color-white/70 mt-8  font-lato">
                Cada cliente é especial para nós. Oferecemos atenção
                personalizada, sempre disponíveis para esclarecer dúvidas e
                orientar em cada etapa do processo legal.
              </div>
            </div>

            <div className="shadow bg-gradient-to-b from-color-black to-color-black2 rounded-lg p-8 max-w-[325px]">
              <div className="text-color-clicado font-bold text-xl">
                Excelência em Advocacia:
              </div>
              <div className="text-color-white/70 mt-8 font-lato">
                Nossa busca constante pela excelência jurídica reflete nosso
                compromisso em superar expectativas e oferecer um serviço
                jurídico excepcionalmente confiável e eficaz.
              </div>
            </div>
          </div>
        </div>
        <div className="shadow p-6 md:p-8 bg-color-blacktrans rounded-xl w-90">
          <Card color="transparent" shadow={false}>
            <div className="flex flex-row w-full">
              <Typography className="text-color-clicado font-bold text-2xl ">
                Faça uma consultoria conosco
              </Typography>
              <FaCircleArrowDown className="text-color-clicado/90 text-4xl ml-6 "></FaCircleArrowDown>
            </div>

            <Typography
              color="gray"
              className="mt-1 font-normal text-color-clicado/70"
            >
              Mande-nos um e-mail:
            </Typography>
            <form
              id="fs-frm"
              name="form1"
              className="mt-12 mb-8 w-80 max-w-screen-lg sm:w-96"
              action="https://formspree.io/f/meqbvdek"
              method="POST"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  required
                  id="full-name"
                  name="name"
                  className="px-4 rounded-xl h-10 bg-color-blacktrans/70 border-2 text-color-white border-color-clicado"
                  placeholder="Nome"
                />
                <Input
                  required
                  id="email-address"
                  name="_replyto"
                  className="px-4 w-full rounded-xl h-10 bg-color-blacktrans text-color-white border-2 border-color-clicado"
                  placeholder="Email"
                />
                <Input
                  className="text-color-white px-4 w-full rounded-xl h-10 bg-color-black border-2 border-color-clicado"
                  placeholder="Titulo"
                />
              </div>
              <div>
                <Textarea
                  required
                  name="message"
                  id="message"
                  className="text-color-white p-4 mt-8 rounded-sm h-32 bg-color-black border-2 border-color-clicado"
                  placeholder="Mensagem..."
                />
              </div>
              <div>
                <Input
                  type="submit"
                  value="Enviar"
                  className="  w-auto h-[50px] mt-8 rounded-full cursor-pointer
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado/80 border-2
                    border-color-clicado/80 "
                ></Input>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
