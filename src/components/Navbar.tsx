import React, { useState, useEffect, useCallback } from 'react';
import { Link, withPrefix } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { HiXMark } from 'react-icons/hi2';
import logo from "../../assets/Logo5.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const currentPath = withPrefix(window.location.pathname);
  const isAreasFamiliarPage = currentPath === withPrefix('/Areas/familiar/');
  const isAreasCivilPage = currentPath === withPrefix('/Areas/civil/');
  const isAreasTributarioPage = currentPath === withPrefix('/Areas/tributario/');
  const isAreasTrabalhistaPage = currentPath === withPrefix('/Areas/trabalhista/');
  const isAreasAdministrativoPage = currentPath === withPrefix('/Areas/administrativo/');

  return (
    <div>
      <nav className='bg-color-black text-color-white font-serif text-base'>
        <div className=" items-center flex justify-evenly min-h-[80px]">
          <Link to="/">
              <img src={logo} alt='logoo'></img>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="mt-2 text-white focus:outline-none bg-color-black">
              {isOpen ? (
                <HiXMark className="h-7 w-7 fill-current" />
              ) : (
                <GiHamburgerMenu className="h-7 w-7 fill-current" />
              )}
            </button>
          </div>
            <ul className="md:flex mt-30 md:mt-0 gap-8 hidden font-thin text-base">
              <li>
                <Link
                  to="/"
                  activeClassName="text-color-clicado"
                  className="hover:text-color-clicado ease-in transition-all"
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  to="/Institucional"
                  activeClassName="text-color-clicado"
                  className="hover:text-color-clicado ease-in transition-all"
                >
                  Institucional
                </Link>
              </li>
              <li>
                <Link
                  to="/Areas/familiar"
                  className={`hover:text-color-clicado ease-in transition-all 
                  ${(isAreasCivilPage || isAreasFamiliarPage || isAreasTributarioPage || 
                    isAreasTrabalhistaPage || isAreasAdministrativoPage) ? "text-color-clicado" : ""}`}

                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  to="/Artigos"
                  activeClassName="text-color-clicado"
                  className="hover:text-color-clicado ease-in transition-all"
                >
                  Artigos
                </Link>
              </li>
              <li>
                <Link
                  to="/Fale"
                  activeClassName="text-color-clicado"
                  className="hover:text-color-clicado ease-in transition-all"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
        </div>
        
        <div className="flex-col md:hidden mx-auto justify-center text-center ">
          <div className={` md:flex ${isOpen ? 'block' : 'hidden'}`}>
              <ul className=" mt-30 md:mt-0 gap-10 font-bold mx-auto pb-5 text-xl">
                <li>
                  <Link
                    to="/"
                    activeClassName="text-color-clicado"
                    className="hover:text-color-clicado "
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Institucional"
                    activeClassName="text-color-clicado"
                    className="hover:text-color-clicado"
                  >
                    Institucional
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Areas"
                    activeClassName="text-color-clicado"
                    className="hover:text-color-clicado"
                  >
                    Áreas de Atuação
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Artigos"
                    activeClassName="text-color-clicado"
                    className="hover:text-color-clicado"
                  >
                    Artigos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Fale"
                    activeClassName="text-color-clicado"
                    className="hover:text-color-clicado"
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        
      </nav>
      <DevScreenDebug />
    </div>
  );
  
};

export default Navbar;


export function DevScreenDebug() {
  const [dimensions, setDimensions] = useState({w: 0, h: 0});
  const [hidden, setHidden] = useState(false);

  const hide = useCallback(() => {
    setHidden(true);
  }, [setHidden]);

  const onResize = useCallback(() => {
    setDimensions({w: window.innerWidth, h: window.innerHeight});
  }, [setDimensions]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  if (typeof window === 'object' && window.location.port === '') {
    // non dev env
    return null;
  }

  if (hidden) {
    return null;
  }
  return (
    <button
      title="Click to hide"
      onClick={hide}
      tabIndex={-1}
      className="fixed bottom-0 right-0 z-[9999] bg-black bg-opacity-50 p-2 text-sm text-white opacity-30"
    >
      <div>
        <span className="hidden sm:inline">SM</span>
        <span className="hidden md:inline">- MD</span>
        <span className="hidden lg:inline">- LG</span>
        <span className="hidden xl:inline">- XL</span>
        <span className="hidden 2xl:inline">- 2XL</span>
      </div>
      <div className="text-xs font-bold">
        {dimensions.w}x{dimensions.h}
      </div>
    </button>
  );
}