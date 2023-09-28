import React from 'react'
import "../styles/foto.css"

export default function whats() {
  return (
    <a target='_blank' href="https://wa.me/5554997101763?text=Quero discutir meu caso. Podemos conversar?">
    <div className='z-20 bottom-6 right-6 md:right-10  fixed float-right'>
        
        <div className="sticky foto_whats cursor-pointer"></div>
        <span className="absolute left-[3.1em] top-[-4px] flex">
            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-color-verde opacity-75"></span>
            <span className=" relative inline-flex rounded-full h-[14px] w-[14px] bg-color-verde opacity-90"></span>
        </span>
        
    </div>
    </a>
  )
}
