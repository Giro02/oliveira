import React from 'react'
import "../styles/foto.css"

export default function localizacao_inst() {
  return (
    <div>
        <div className='flex items-center font-serif justify-around py-8'>
        <div className='foto2 hidden lg:block'></div>
        <div className='bg-color-white py-12 px-6 md:px-24'>
            <h1 className='text-color-clicado font-bold text-4xl'>De Belo Horizonte para todo o Brasil.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>O escritório de advocacia sediado em Belo Horizonte, com uma presença que abrange todo o Brasil, representa uma história de sucesso e comprometimento com a justiça. Com sua localização estratégica na capital de Minas Gerais, o escritório se destaca como um centro de excelência jurídica, atendendo clientes de todas as regiões do país.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>Representação jurídica eficaz em todo o Brasil. Seja para empresas que buscam orientação jurídica estratégica ou para indivíduos que precisam de assistência legal, este escritório de advocacia em Belo Horizonte é um parceiro confiável e comprometido em toda a nação.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>A equipe de advogados altamente qualificados é conhecida por oferecer serviços jurídicos de alta qualidade em uma ampla gama de áreas do direito, desde direito empresarial e civil até direito trabalhista e tributário.</h1>
        </div>
        
        {/* <div>../static/escritorio.png </div> */}
        
    </div>
    </div>
  )
}
