import React  from 'react';
import { useLocation } from 'react-router-dom';
import BotoesAreasMenu from './BotoesAreasMenu';
import { Link } from "gatsby"


export default function AreasMenu() {
  // const { pathname } = useLocation();
  
  return (
    <div className={`flex justify-center flex-col md:flex-row  items-center bg-color-black border-b-4 border-color-clicado  md:flex `}>
      <div className='flex justify-center items-center '>
      <Link to='/Areas/familiar'><BotoesAreasMenu>Direito Familiar</BotoesAreasMenu></Link>
      <Link to='/Areas/civil'><BotoesAreasMenu>Direito Civil</BotoesAreasMenu></Link>
      <Link to='/Areas/tributario'><BotoesAreasMenu>Direito Tributário</BotoesAreasMenu></Link>
      </div>
      <div className='flex justify-center items-center '>
      <Link to='/Areas/trabalhista'><BotoesAreasMenu>Direito Trabalhista</BotoesAreasMenu></Link>
      <Link to='/Areas/administrativo'><BotoesAreasMenu>Direito Administrativo</BotoesAreasMenu></Link>
      </div>
      
    </div>
    
  );
}

