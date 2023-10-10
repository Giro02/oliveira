import React from 'react'
import escritorio from '../../assets/escritorio.png'


export default function escritorio_inst() {
  return (
    <div className='flex items-center font-serif'>
        <div className='bg-color-white py-12 px-6 md:px-24'>
            <h1 className='text-color-clicado font-bold text-4xl'>O escritório</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>Com uma trajetória de mais de 25 anos de atuação, somos um escritório de advocacia fundado em 1998. Nossa missão é ajudar empresas e empreendedores a lidar melhor com o Direito. Nosso papel é impedir que a falta de conhecimento jurídico atrapalhe o potencial de crescimento do seu negócio e de seus clientes.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>Temos desempenhado um papel fundamental na resolução de questões complexas relacionadas a transações imobiliárias, contratos e litígios, garantindo segurança e proteção aos interesses de nossos clientes. Além disso, nossa expertise na Constituição de Holdings Familiares, Direito de Família e Direito Sucessório tem proporcionado soluções personalizadas e estratégicas para as necessidades específicas de nossos clientes, consolidando nossa reputação de confiança e competência.</h1>
            <h1 className='text-color-black2 max-w-[800px] mt-8'>Nosso compromisso inabalável com a qualidade e o conhecimento jurídico nos mantém na vanguarda do campo jurídico, prontos para continuar oferecendo serviços jurídicos de alto nível e ajudando nossos clientes a alcançar seus objetivos de forma segura e eficaz.</h1>
        </div>
        <div>
          <img className='bg-cover bg-no-repeat hidden xl:block'  src={escritorio}></img>
        </div>
    </div>
  )
}
