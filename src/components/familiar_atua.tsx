import React, { useState } from 'react';
import Civil_atua from "../components/Civil_atua"
import FamiliarIntro_atua from "../components/familiarIntro_atua"
import Tributario_atua from "../components/Tributario_atua"
import Trabalhista_atua from "../components/Trabalhista_atua"
import Administrativo_atua from "../components/Administrativo_atua"

type ComponentType = 'familiar' | 'civil' | 'tributario' | 'trabalhista' | 'administrativo';

export default function familiar_atua() {
  const [selectedOption, setSelectedOption] = useState<ComponentType>('familiar');

  const componentMap: Record<ComponentType, JSX.Element> = {
    familiar: <FamiliarIntro_atua />,
    civil: <Civil_atua />,
    tributario: <Tributario_atua />,
    trabalhista: <Trabalhista_atua />,
    administrativo: <Administrativo_atua />
  };

   const handleOptionClick = (option: ComponentType) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className='bg-color-black font-serif pt-2 flex items-center flex-col justify-center px-6 '>
        <h1 className='text-color-clicado font-bold text-3xl mt-8z lg:w-[825px]'>Áreas de atuação</h1>
      </div>
      <div className='bg-color-black border-b-4  font-serif text-normal border-color-clicado pt-4 flex items-center justify-center'>
        <div className='w-[825px] text-color-white flex  mb-2'>
          <button
            onClick={() => handleOptionClick('familiar')}
            className={`${
              selectedOption === 'familiar' ? 'text-color-clicado border-b-2 border-color-clicado' : 'text-color-white'
            } px-2 py-2 mr-4 transition duration-300 ease-in-out  hover:border-b-2 border-color-clicado hover:text-color-clicado `}
          >
            Direito Familiar
          </button>
          <button
            onClick={() => handleOptionClick('civil')}
            className={`${
              selectedOption === 'civil' ? 'text-color-clicado border-b-2 border-color-clicado' : 'text-color-white'
            } px-2 py-2 mr-4 transition duration-300 hover:border-b-2 border-color-clicado hover:text-color-clicado ease-in-out`}
          >
            Direito Civil
          </button>
          <button
            onClick={() => handleOptionClick('tributario')}
            className={`${
              selectedOption === 'tributario' ? 'text-color-clicado border-b-2 border-color-clicado' : 'text-color-white'
            } px-2 py-2 mr-4 transition duration-300 hover:border-b-2 border-color-clicado hover:text-color-clicado ease-in-out`}
          >
            Direito Tributário
          </button>
          <button
            onClick={() => handleOptionClick('trabalhista')}
            className={`${
              selectedOption === 'trabalhista' ? 'text-color-clicado border-b-2 border-color-clicado' : 'text-color-white'
            } px-2 py-2 mr-4 transition duration-300 hover:border-b-2 border-color-clicado hover:text-color-clicado ease-in-out`}
          >
            Direito Trabalhista
          </button>
          <button
            onClick={() => handleOptionClick('administrativo')}
            className={`${
              selectedOption === 'administrativo' ? 'text-color-clicado border-b-2 border-color-clicado' : 'text-color-white'
            } px-2 py-2 mr-4 transition duration-300 hover:border-b-2 border-color-clicado hover:text-color-clicado ease-in-out`}
          >
            Direito Administrativo
          </button>
        </div>
      </div>

      <div>
        {componentMap[selectedOption]}
      </div>
    </div>
  );
}
