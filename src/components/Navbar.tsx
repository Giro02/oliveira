import React, { useState, useEffect, useCallback } from "react";
import { Link, withPrefix } from "gatsby";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";
import logo from "../images/Logo5.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(withPrefix(window.location.pathname));
  }, []);
  //
  return (
    <div>
      <nav className="bg-color-black text-color-white font-serif font-extrabold">
        <div className=" items-center flex justify-evenly min-h-[80px]">
          <Link to="/">
            <img src={logo} alt="logoo"></img>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="mt-2 text-white focus:outline-none bg-color-black"
            >
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
          <div className={` md:flex ${isOpen ? "block" : "hidden"}`}>
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
    </div>
  );
};

export default Navbar;
