import React , { useEffect, useState } from 'react';
import BotoesAreasMenu from './BotoesAreasMenu';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';

export default function AreasMenu() {
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(withPrefix(window.location.pathname));
  }, []);
  
  const isAreasFamiliarPage = currentPath === withPrefix('/Areas/familiar/');
  const isAreasCivilPage = currentPath === withPrefix('/Areas/civil/');
  const isAreasTributarioPage = currentPath === withPrefix('/Areas/tributario/');
  const isAreasTrabalhistaPage = currentPath === withPrefix('/Areas/trabalhista/');
  const isAreasAdministrativoPage = currentPath === withPrefix('/Areas/administrativo/');

  return (
    <div className={`flex justify-center flex-col md:flex-row items-center bg-color-black border-b-4 border-color-clicado md:flex`}>
      <div className='flex justify-center items-center'>
        <Link to='/Areas/familiar'>
          <BotoesAreasMenu isSelected={isAreasFamiliarPage}>Direito Familiar</BotoesAreasMenu>
        </Link>
        <Link to='/Areas/civil'>
          <BotoesAreasMenu isSelected={isAreasCivilPage}>Direito Civil</BotoesAreasMenu>
        </Link>
        <Link to='/Areas/tributario'>
          <BotoesAreasMenu isSelected={isAreasTributarioPage}>Direito Tributário</BotoesAreasMenu>
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link to='/Areas/trabalhista'>
          <BotoesAreasMenu isSelected={isAreasTrabalhistaPage}>Direito Trabalhista</BotoesAreasMenu>
        </Link>
        <Link to='/Areas/administrativo'>
          <BotoesAreasMenu isSelected={isAreasAdministrativoPage}>Direito Administrativo</BotoesAreasMenu>
        </Link>
      </div>
    </div>
  );
}
