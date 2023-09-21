import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea 
  } from "@material-tailwind/react";
  import { FaCircleArrowDown } from "react-icons/fa6"

export default function agende() {
  return (
    <div className="flex jusitfy-center font-serif">
        <div className=' pt-14 bg-cover flex flex-col xl:flex-row  w-screen items-center justify-evenly bg-color-black2' >
        
        <div className='flex items-center p-8 flex-col md:flex-row lg:fl gap-8 xl:gap-16 2xl:gap-24'>
        <div>
            <div className="shadow bg-color-blacktrans rounded-lg p-8 max-w-[325px]">
              <div className='text-color-clicado font-bold text-xl'>Compromisso com os Clientes:</div>
              <div className='text-color-white/70 mt-10'>Nossa empresa tem um compromisso inabalável com os interesses dos nossos clientes. Estamos aqui para ouvir, entender e atender às suas necessidades legais com dedicação e paixão.</div>
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:gap-16 2xl:gap-24">
          
          
          

          <div className="shadow bg-gradient-to-b from-color-black to-color-black2 rounded-lg p-8 max-w-[325px]">
            <div className='text-color-clicado font-bold text-xl'>Atenção Personalizada:</div>
            <div className='text-color-white/70 mt-10 '>Cada cliente é especial para nós. Oferecemos atenção personalizada, sempre disponíveis para esclarecer dúvidas e orientar em cada etapa do processo legal.</div>
          </div>
          
          
          <div className="shadow bg-gradient-to-b from-color-black to-color-black2 rounded-lg p-8 max-w-[325px]">
            <div className='text-color-clicado font-bold text-xl'>Excelência em Advocacia:</div>
            <div className='text-color-white/70 mt-10 '>Nossa busca constante pela excelência jurídica reflete nosso compromisso em superar expectativas e oferecer um serviço jurídico excepcionalmente confiável e eficaz.</div>
          </div>
        </div>

        </div>
            <div className='shadow p-6 md:p-8 bg-color-blacktrans rounded-xl w-90'>
              <Card color="transparent" shadow={false}>
                <div className="flex flex-row w-full">
                <Typography className='text-color-clicado font-bold text-2xl '>
                  Peça uma consultoria grátis 
                </Typography>
                <FaCircleArrowDown className='text-color-clicado/90 text-4xl ml-6 '></FaCircleArrowDown>
                </div>
                
              <Typography color="gray" className="mt-1 font-normal text-color-clicado/70">
                Mande-nos um e-mail:
              </Typography>
              <form className="mt-12  w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input className='w-full px-4 rounded-xl h-10 bg-color-blacktrans/70 border-2 border-color-clicado' placeholder="Nome" />
                  <Input variant='outlined' className="px-4 w-full rounded-xl h-10 bg-color-blacktrans border-2 border-color-clicado" placeholder="Email" />
                  <Input variant='outlined' placeholder='Titulo' className="px-4 w-full rounded-xl h-10 bg-color-black border-2 border-color-clicado" color='red'  />
                </div>
                <div className="">
                  <Textarea className='p-4 mt-8 rounded-sm h-32 bg-color-black border-2 border-color-clicado text-color-white' placeholder="Mensagem..." />
                </div>
              </form>
              <Button className="child w-auto h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado/80 border-2
                    border-color-clicado/80"
                     >Enviar</Button>  
            </Card>
            </div>
              
        </div>
        
    </div>
  )
}