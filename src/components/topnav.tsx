import React from 'react'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { BiLogoLinkedin} from "react-icons/bi"
import { AiFillInstagram } from 'react-icons/ai'
import { FaScaleUnbalanced } from "react-icons/fa6"
import { MdEmail } from 'react-icons/md'
import BotaoSocial from './botoesSociais'


export default function topnav() {
  return (
    <div className=" bg-color-black2 font-serif font-thin lg:flex-row text-color-white flex justify-evenly items-center flex-col">
        <div className='flex-row flex items-center gap-3 text-sm'>
            <FaScaleUnbalanced className='text-color-clicado  h-5 w-5'></FaScaleUnbalanced>
            <h2 className='text-sm'>R. São Paulo 1071, sala 515, Centro, BH – MG, 30170-131</h2>
        </div>
        <div className='flex-row flex items-center gap-3 text-color-clicado text-sm'>
            <HiMiniDevicePhoneMobile className='h-5 w-5'></HiMiniDevicePhoneMobile>
            <h2>(31) 32748997</h2>
        </div> 
        <div className='text-color-clicado flex justify-center items-center  min-h-[40px]'>
            
            <div>
                <a target ="_blank" href='https://br.linkedin.com/company/oliveira-severo-sociedade-de-advogados'>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <BiLogoLinkedin size={'18px'}></BiLogoLinkedin>
                    </BotaoSocial>
                </a>
            </div>

            <div>
                <a target ="_blank" href='administrativo@oliveirasevero.adv.br'>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <MdEmail size={'18px'}></MdEmail>
                    </BotaoSocial>
                </a>
            </div>

            <div>
                <a target ="_blank" href='https://www.instagram.com/oliveiraseveroadv/'>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <AiFillInstagram size={'18px'}></AiFillInstagram>
                    </BotaoSocial>
                </a>
            </div>
            
        </div>
           
    </div>
    
  )
}
