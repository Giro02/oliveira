import React, { ReactNode } from 'react';

type ItemProps = {
  children: ReactNode;
  isSelected?: boolean; 
};

function BotoesAreasMenu({ children, isSelected }: ItemProps) {
  return (
    <div className={`text-color-white px-2 py-2 mr-4 transition duration-300 ease-in-out text-sm mb-4 font-serif ${isSelected ? 'border-b-2 border-color-clicado' : 'border-b-2 border-color-black'}`}>
      {children}
    </div>
  );
}

export default BotoesAreasMenu;
