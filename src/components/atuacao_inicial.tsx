import React from 'react'
import '../styles/atua.css'
import { MdFamilyRestroom } from "react-icons/md"
import { Button } from "@material-tailwind/react";
import { MdWork } from "react-icons/md"
import { FaSackDollar, FaHandHoldingDollar, FaAward } from "react-icons/fa6"
import { GiReceiveMoney } from "react-icons/Gi"
import { BsFillArrowRightCircleFill } from "react-icons/bs"



export default function atuacao_inicial() {

  return (
 

      <div className='bg-no-repeat bg-center bg-cover py-28 flex justify-center bg-color-black2 font-serif'>
         <div className="flex flex-col items-center">
          <div className=' flex items-center'>
            <h1 className='text-color-clicado font-bold text-3xl p-4'>Áreas de prática</h1>
          </div>
          <div className='flex items-center flex-col mb-10 lg:mb-24 '>
            <h1 className='text-color-white/70'>Oliveira Severo é um time full-service. Selecione </h1>
            <h1 className='text-color-white/70'>abaixo uma área de atuação:</h1>
          </div>
            
          
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-14'> 
                
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdFamilyRestroom className= 'child2 text-color-clicado/90 ' size={80}></MdFamilyRestroom>
                    <h2 className='text-color-white/80 child3 text-lg'>Holding Familiar</h2>

                    <Button className="
                    tamanho w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-clicado
                    hover:bg-color-black border-2
                    hover:border-color-clicado
                    border-color-clicado/50
                    hover:shadow
                     "
                     >Saiba mais</Button>  
                </div> 
                 <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdWork className= 'child2 text-color-clicado/90 ' size={80}></MdWork>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito trabalhista</h2>

                    <Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    border-color-clicado/50 "
                     >Saiba mais</Button>  
                </div>
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <GiReceiveMoney className= 'child2 text-color-clicado/90 ' size={80}></GiReceiveMoney>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito tributário</h2>

                    <Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    border-color-clicado/50 "
                     >Saiba mais</Button>  
                </div>
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <FaAward className= 'child2 text-color-clicado/90 ' size={80}></FaAward>
                    <h2 className='text-color-white/80 child3 text-lg'>Administrativo</h2>

                    <Button className=" w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    border-color-clicado/50 "
                     >Saiba mais</Button>  
                </div> 
                
                
            </div> 
            <Button className="shadow-md w-auto py-4 mt-8 rounded-full  
             flex flex-row items-center justify-center px-6 
             bg-color-clicado/90
             text-color-black2 text-lg transition-all ease-in
             hover:text-color-white
             hover:bg-color-clicado border
             border-color-black2 "
                     >Ver todas as áreas de atuação
                     <BsFillArrowRightCircleFill className="h-8 w-auto ml-5" />
                     </Button>   
         </div> 
    </div>
  )
}
