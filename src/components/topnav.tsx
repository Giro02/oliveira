import React from 'react'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { IconButton } from "@material-tailwind/react";
import { GrFacebookOption } from "react-icons/gr"
import { BiLogoLinkedin, BiLogoSkype } from "react-icons/bi"
import { TfiYoutube } from "react-icons/tfi"
import { FaScaleUnbalanced } from "react-icons/fa6"
import { Link } from 'gatsby';
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
                <a target ="_blank" href='https://pt-br.facebook.com/'>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <GrFacebookOption></GrFacebookOption>
                    </BotaoSocial>
                </a>
            </div>
            
            <div>
                <a target ="_blank" href='https://br.linkedin.com/company/oliveira-severo-sociedade-de-advogados'>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <BiLogoLinkedin size={'18px'}></BiLogoLinkedin>
                    </BotaoSocial>
                </a>
            </div>
            
            <div>
                <a target ="_blank" href=''>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <BiLogoSkype size={'18px'}></BiLogoSkype>
                    </BotaoSocial>
                </a>
            </div>

            <div>
                <a target ="_blank" href=''>
                    <BotaoSocial {...BotaoSocial.variants.header}>
                        <TfiYoutube size={'18px'}></TfiYoutube>
                    </BotaoSocial>
                </a>
            </div>
            
        </div>
           
    </div>
    
  )
}
