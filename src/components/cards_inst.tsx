import React from 'react'

export default function cards_inst() {
  return (
    <div className="flex justify-center items-center flex-col bg-color-black2 pb-24">
        <div className='grid grid-cols-1 md:grid-cols-3 font-serif gap-8'>
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Comprometimento</div>
            </div>
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Transparência</div>
            </div>
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Credibilidade</div>
            </div>
        
        
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Segurança</div>
            </div>
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Clareza</div>
            </div>
            <div className="shadow max-w-[250px] bg-color-clicado rounded-lg py-14 px-8 items-center justify-center flex">
                <div className='text-color-black font-bold text-2xl'>Precisão</div>
            </div>
        
        </div>
    </div>
    
    
    
  )
}
