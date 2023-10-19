import React from 'react';
import { Link } from 'gatsby';
import { IconButton } from "@material-tailwind/react";
import { GrFacebookOption } from "react-icons/gr"
import { BiLogoLinkedin, BiLogoSkype, BiSolidTimeFive} from "react-icons/bi"
import { TfiYoutube } from "react-icons/tfi"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import logo from "../images/Logo5.png"
import BotaoSocial from './botoesSociais';



export default function footer() {
  return (
    <div className='bg-color-black2 p-16 px-8 md:px-16 font-serif'>
      <div className='flex flex-col lg:flex-row justify-evenly p-6 md:p-12 border border-color-clicado'>
        
        <div className='flex flex-col gap-6 justify-evenly'>
          <img className='max-w-[286px]' src={logo}></img>
          <h1 className='max-w-xs text-color-white text-sm'>Nos siga nas redes sociais para acompanhar em tempo real tudo sobre o mundo do direito</h1>
          <div className='text-color-clicado flex items-center gap md:gap-4 min-h-[40px]'>
            <Link target='_blank' to='https://pt-br.facebook.com/'>
              <BotaoSocial {...BotaoSocial.variants.footer}>
                <GrFacebookOption size={'18px'}></GrFacebookOption>
              </BotaoSocial>
            </Link>
            <Link target='_blank' to='https://pt-br.facebook.com/'>
              <BotaoSocial {...BotaoSocial.variants.footer}>
                <BiLogoLinkedin size={'18px'}></BiLogoLinkedin>
              </BotaoSocial>
            </Link>
            <Link target='_blank' to='https://pt-br.facebook.com/'>
              <BotaoSocial {...BotaoSocial.variants.footer}>
                <BiLogoSkype size={'18px'}></BiLogoSkype>
              </BotaoSocial>
            </Link>
            <Link target='_blank' to='https://pt-br.facebook.com/'>
              <BotaoSocial {...BotaoSocial.variants.footer}>
                <TfiYoutube size={'18px'}></TfiYoutube>
              </BotaoSocial>
            </Link>       
        </div>
        
      </div>
          <div className='flex flex-col'>
      
            <div className='text-color-clicado font-bold text-xl mb-6'>O Escritório</div>
            <div className='text-color-clicado'>
            <ul className="md:flex md:mt-0 flex flex-col gap-4 text-sm ">
                  <li>
                    <Link
                      to="/"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white ease-in transition-all"
                    >
                      Página Inicial
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Institucional"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Institucional
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Areas"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Áreas de Atuação
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Artigos"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Artigos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Fale"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Fale Conosco
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
          <div className='text-color-white flex flex-col'>
            <h1 className='text-color-clicado font-bold text-xl mb-6'>Areas de atuação</h1>
            <ul className="md:flex mt-30 md:mt-0 flex flex-col gap-4 text-sm ">
                  <li>
                    <Link
                      to="/Areas/civil"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white ease-in transition-all"
                    >
                      Direito Civil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Areas/trabalhista"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Direito trabalhista
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Areas/familiar"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                    Direito familiar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Areas/tributario"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                      Direito tributário
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Areas/adminisrtativo"
                      activeClassName="text-color-clicado"
                      className="hover:text-color-clicado text-color-white  ease-in transition-all"
                    >
                     Direito Administrativo
                    </Link>
                  </li>
                </ul>
          </div>

          <div>
            <div className='text-color-clicado font-bold text-lg'>Onde estamos</div>
            <div className="flex pb-2  bg-color-black2   border-b border-color-clicado/70 items-center">
              <FaLocationDot className='text-3xl text-color-clicado'></FaLocationDot>
              <div className='text-color-white ml-2 text-sm'>R. São Paulo 1071, sala 515, Centro, BH – MG, 30170-131</div>
            </div>
            <div className='text-color-clicado font-bold text-lg mt-4'>Horário de atendimento</div>
            <div className="flex pb-2 bg-color-black2   border-b border-color-clicado/70 items-center">
              <BiSolidTimeFive className='text-3xl text-color-clicado'></BiSolidTimeFive>
              <div className='text-color-white ml-2 text-sm'>Atendimento de Segunda à Sexta-feira das 8h às 17h </div>
            </div>
            <div className='text-color-clicado font-bold text-lg mt-4'>Envie um email para nossa equipe</div>
            <div className="flex pb-2  bg-color-black2   border-b border-color-clicado/70 items-center">
              <MdEmail className='text-3xl text-color-clicado'></MdEmail>
              <div className='text-color-white ml-2 text-sm'>severo@oliveirasevero.adv.br</div>
            </div>
          </div>
      </div>
      
      
    </div>
  )
}
