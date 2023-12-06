import React from "react";
import centro from "./../images/centro.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import "../styles/atua.css";

export default function ondeEstamos_fale() {
  return (
    <div className="flex justify-evenly bg-color-white items-center py-12 flex-col lg:flex-row font-serif">
      <div className="mx-4">
        <h1 className="text-color-clicado font-bold text-3xl">Onde Estamos</h1>
        <img
          src={centro}
          alt="foto do centro"
          className="mt-6 rounded-2xl"
        ></img>
        <div>
          {/* <div className='text-color-clicado font-bold text-lg'>Onde estamos</div> */}
          <div className="flex pb-2   mt-6 border-b border-color-clicado/70 items-center">
            <FaLocationDot className="text-3xl text-color-clicado"></FaLocationDot>
            <div className="text-color-black ml-2 text-lg font-lato">
              R. São Paulo 1071, salas 509 a 517, Centro - Belo Horizonte/
              MG, CEP: 30170-907
            </div>
          </div>
          <div className="text-color-clicado font-bold text-lg mt-4">
            Horário de atendimento
          </div>
          <div className="flex pb-2    border-b border-color-clicado/70 items-center">
            <BiSolidTimeFive className="text-3xl text-color-clicado"></BiSolidTimeFive>
            <div className="text-color-black ml-2 text-lg font-lato">
              Atendimento de Segunda à Sexta-feira das 8h às 17h{" "}
            </div>
          </div>
          <div className="text-color-clicado font-bold text-lg mt-4">
            Envie um email para nossa equipe
          </div>
          <div className="flex pb-2    border-b border-color-clicado/70 items-center">
            <MdEmail className="text-3xl text-color-clicado"></MdEmail>
            <div className="text-color-black ml-2 text-lg font-lato">
              <div>severo@oliveirasevero.adv.br</div>
              <div>severo@jsevero.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow p-6 md:p-8 bg-color-white rounded-xl w-90 font-lato">
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
                className="required px-4 rounded-xl h-10 bg-color-white border-2 border-color-clicado"
                placeholder="Nome"
              />
              <Input
                required
                id="email-address"
                name="_replyto"
                className="px-4 w-full rounded-xl h-10 bg-color-white border-2 border-color-clicado"
                placeholder="Email"
              />
              <Input
                className="px-4 w-full rounded-xl h-10 bg-color-white border-2 border-color-clicado"
                placeholder="Titulo"
              />
            </div>
            <div>
              <Textarea
                required
                name="message"
                id="message"
                className="text-color-black p-4 mt-8 rounded-sm h-32 bg-color-white border-2 border-color-clicado"
                placeholder="Mensagem..."
              />
            </div>
            <div>
              <Input
                type="submit"
                value="Enviar"
                className="  w-auto h-[50px] mt-8 rounded-full cursor-pointer
                    bg-color-clicado
                    text-color-white text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-black border-2
                    border-color-clicado/80 "
              ></Input>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
