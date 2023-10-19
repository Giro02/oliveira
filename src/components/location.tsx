import React from 'react'
import local from "../images/location.png"

export default function location() {
  return (
    <div className='hidden md:block aspect-3.84/1 w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${local})` }}></div>

  )
}
