import React from 'react'
import {HiMenu} from 'react-icons/hi'

export default function Menu() {
  return (
   <div className="bg-color-black flex flex-row justify-between px-10 ">
    <div>logo</div>
    <div className="flex flex-row gap-4 text-color-white">
        <div>Home</div>
        <div>Institucional</div>
        <div>Areas de atuacao</div>
        <div>Artigos</div>
        <div>Fale conosco</div>
    </div>
    
   </div>
  )
}
