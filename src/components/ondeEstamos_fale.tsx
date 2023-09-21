import React from 'react'
import centro from "./../images/centro.jpg";
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidTimeFive } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { FaCircleArrowDown } from "react-icons/fa6"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea 
  } from "@material-tailwind/react";

export default function ondeEstamos_fale() {
  return (
    <div className="flex justify-evenly bg-color-white items-center py-12 flex-col lg:flex-row font-serif">
        <div className='mx-4'>
            <h1 className='text-color-clicado font-bold text-3xl'>Onde Estamos</h1>
            <img src={centro} alt='foto do centro' className='mt-6 rounded-2xl' ></img>
            <div>
            {/* <div className='text-color-clicado font-bold text-lg'>Onde estamos</div> */}
            <div className="flex pb-2   mt-6 border-b border-color-clicado/70 items-center">
              <FaLocationDot className='text-3xl text-color-clicado'></FaLocationDot>
              <div className='text-color-black ml-2 text-lg'>R. São Paulo 1071, sala 515, Centro, BH – MG, 30170-131</div>
            </div>
            <div className='text-color-clicado font-bold text-lg mt-4'>Horário de atendimento</div>
            <div className="flex pb-2    border-b border-color-clicado/70 items-center">
              <BiSolidTimeFive className='text-3xl text-color-clicado'></BiSolidTimeFive>
              <div className='text-color-black ml-2 text-lg'>Atendimento de Segunda à Sexta-feira das 9h às 18h </div>
            </div>
            <div className='text-color-clicado font-bold text-lg mt-4'>Envie um email para nossa equipe</div>
            <div className="flex pb-2    border-b border-color-clicado/70 items-center">
              <MdEmail className='text-3xl text-color-clicado'></MdEmail>
              <div className='text-color-black ml-2 text-lg'>severo@oliveirasevero.adv.br</div>
            </div>
          </div>
          
        </div>
        <div className='border-2 shadow border-color-clicado mt-16 lg:mt-0 bg-color-white p-6 md:p-8 rounded-xl w-90'>
              <Card color="transparent" shadow={false}>
                <div className="flex flex-row w-full">
                <Typography className='text-color-clicado font-bold text-2xl '>
                  Peça uma consultoria grátis 
                </Typography>
                <FaCircleArrowDown className='text-color-clicado/90 text-4xl ml-6 '></FaCircleArrowDown>
                </div>
                
              <Typography color="gray" className="mt-1 font-normal text-color-clicado/90">
                Mande-nos um e-mail:
              </Typography>
              <form className="mt-12  w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input className='w-full px-4 rounded-xl h-10 border-2 bg-color-white border-color-clicado' placeholder="Nome" />
                  <Input variant='outlined' className="px-4 w-full bg-color-white rounded-xl h-10  border-2 border-color-clicado" placeholder="Email" />
                  <Input variant='outlined' placeholder='Titulo' className="px-4 w-full bg-color-white rounded-xl h-10  border-2 border-color-clicado" color='red'  />
                </div>
                <div className="">
                  <Textarea className='p-4 mt-8 rounded-sm h-32 border-2 bg-color-white border-color-clicado text-color-white' placeholder="Mensagem..." />
                </div>
              </form>
              <Button className="child w-auto h-[50px] mt-8 rounded-full 
                    bg-color-clicado
                    text-color-black text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado/80 border-2
                    border-color-clicado/80"
                     >Enviar</Button>  
            </Card>
            </div>
    </div>
  )
}