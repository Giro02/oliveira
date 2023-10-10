import React, { PropsWithChildren } from 'react'
import imagem1 from "../../assets/whatsapp.png"

export default function whats() {
  return (
    <a target='_blank' href="https://wa.me/553199788997?text=Quero discutir meu caso. Podemos conversar?">
    <div className='z-20 bottom-6 right-6 md:right-10 fixed '>
        <div style={{ backgroundImage: `url(${imagem1})` }} className="bg-cover h-16 w-16 sticky cursor-pointer"></div>
        <span className="absolute left-[3.3em] top-[-4px] flex">
            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-color-verde opacity-75"></span>
            <span className=" relative inline-flex rounded-full h-[14px] w-[14px] bg-color-verde opacity-90"></span>
        </span>
        
    </div>
    </a>
  )
}
type ItemProps = PropsWithChildren<{
  image: string;
}>;