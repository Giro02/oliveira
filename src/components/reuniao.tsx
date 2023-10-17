import React from 'react'
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export default function reuniao() {
  return (
    <div className="flex pb-24 pt-6 justify-center items-center flex-col bg-color-black2 font-serif">
        
        <a target='_blank' href="https://wa.me/553199788997?text=Quero discutir meu caso. Podemos conversar?"><Button className=" shadow-md w-auto py-4 mt-8 rounded-full  
             flex flex-row items-center justify-center px-6 
                    bg-color-clicado/90
                    text-color-black2 text-lg transition-all ease-in
                    hover:text-color-white
                    hover:bg-color-clicado border
                    border-color-black2 "
                     >Marcar uma reunião online
                     <BsFillArrowRightCircleFill className="h-8 w-auto ml-5" />
                     </Button></a>
        
    </div>
  )
}
