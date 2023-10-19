import React, {PropsWithChildren, ReactNode} from 'react'
import { Button } from "@material-tailwind/react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

type Props ={
    children:ReactNode;
}

export default function Botao({children}:Props) {
  return (
    <div>
        <Button className="shadow-md mt-4 w-auto py-1 md:py-2 md:mt-8 rounded-full  
             flex flex-row items-center justify-center px-2 md:px-6 
             bg-color-clicado/90
             text-color-black2 
             hover:text-color-white
             hover:bg-color-clicado 
             md:text-lg
             text-xs
              "
                     >{children}
                     <BsFillArrowRightCircleFill className="h-5 w-auto ml-2 md:ml-5 md:h-7" />
                     </Button>
    </div>
  )
}
