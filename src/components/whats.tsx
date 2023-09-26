import React from 'react'
import "../styles/foto.css"

export default function whats() {
  return (
    <div className='cursor-pointer absolute float-right'>
        <span className="z-20 absolute  flex">
            <span className="z-10  foto_whats relative inline-flex rounded-full bg-color-black"></span>
            <span className="z-20  animate-ping absolute left-[2.6em] h-5 w-5 rounded-full bg-color-clicado"></span>
        </span>
    </div>
  )
}
