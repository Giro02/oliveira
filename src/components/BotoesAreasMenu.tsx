import React, { useState, PropsWithChildren, ReactNode } from 'react';
import Link from "gatsby"

type Itemprops = {
    children: ReactNode;
}

function BotoesAreasMenu({children}:Itemprops) {

  return (
      <div
        className={`text-color-white px-2 py-2 mr-4 transition duration-300 ease-in-out hover:border-b-2 text-sm mb-4 border-b-2 border-color-black hover:border-color-clicado  hover:text-color-clicado font-serif`}>
          {children}
      </div>
  );
}

export default BotoesAreasMenu;
