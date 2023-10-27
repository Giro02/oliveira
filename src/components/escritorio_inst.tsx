import React from 'react'
import escritorio from '../images/escritorio.png'


export default function escritorio_inst() {
  return (
    <div className='flex items-center font-serif'>
        <div className='bg-color-white py-12 px-6 md:px-24'>
            <h1 className='text-color-clicado font-bold text-4xl'>O escritório</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>A Sociedade de Advogados Oliveira Severo atua a mais de 25 anos na área de Assessoria Jurídica e Contencioso. Prezando pela ética e eficiência nos seus contratos de prestações de serviços advocatícios, atualmente o escritório conta com trê advogados e um estagiário, que estão disponíveis para eventuais demandas.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>Nós prezamos pela prestação personalizada e modernizada do serviço jurídico, com foco na prevenção de riscos e no consequente alcance de resultados. O escritório se compromete com a excelência no atendimento aos nossos clientes e entende que cada caso deve ser tratado de forma única.</h1>
        </div>
        <div>
          {/* <img className='bg-cover bg-no-repeat hidden xl:block'  src={escritorio}></img> */}

        </div>
    </div>
  )
}
