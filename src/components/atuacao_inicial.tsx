import React from 'react'
import '../styles/atua.css'
import { MdFamilyRestroom } from "react-icons/md"
import { Button } from "@material-tailwind/react";
import { MdWork } from "react-icons/md"
import { FaSackDollar, FaHandHoldingDollar, FaAward } from "react-icons/fa6"
import { GiReceiveMoney } from "react-icons/Gi"


export default function atuacao_inicial() {

  return (
    <div className='minhaClasse flex items-center justify-center ' style={{ backgroundImage: `url('../static/teste5.png')` }}>
        <div className="flex flex-col items-center justify-center ">
            <h1 className='text-color-clicado mb-20'>Áreas de atuação</h1>
            <div className='md:flex-row flex-col items-center justify-evenly gap-10 md:gap-32 grid lg:grid-cols-2 2xl:grid-cols-4'>
                
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdFamilyRestroom className= 'child2 text-color-clicado/90 ' size={80}></MdFamilyRestroom>
                    <h2 className='text-color-white/80 child3 text-lg'>Holding Familiar</h2>

                    <Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2/95
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    border-color-clicado/50 "
                     >Saiba mais</Button>  
                </div>
                <div className="brilha flex flex-col text-lg gap-10 items-center justify-center
                 bg-color-blacktrans p-16 rounded-md transition-all ease-in">
                    <MdWork className= 'child2 text-color-clicado/90 ' size={80}></MdWork>
                    <h2 className='text-color-white/80 child3 text-lg'>Direito trabalhista</h2>

                    <Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2/95
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
                    bg-color-black2/95
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

                    <Button className="child w-[150px] h-[50px] mt-8 rounded-full 
                    bg-color-black2/95
                    text-color-clicado/70 text-sm transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border-2
                    border-color-clicado/50 "
                     >Saiba mais</Button>  
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
