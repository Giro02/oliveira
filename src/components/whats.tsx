import React from 'react'
import "../styles/foto.css"

export default function whats() {
  return (
    <div className='z-20 bottom-6 right-6 md:right-10  fixed float-right'>
        <div className="sticky foto_whats cursor-pointer"></div>
        <span className="absolute left-[3em] top-[-5px] flex">
            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-color-verde opacity-75"></span>
            <span className=" relative inline-flex rounded-full h-4 w-4 bg-color-verde/10 opacity-90"></span>
        </span>
        
    </div>
  )
}
