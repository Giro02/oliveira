import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type ItemProps = {
  icon: ReactNode;
  texto: string;
};
export default function VectorsEscolha({ icon, texto }: ItemProps) {
  return (
    <div className="flex flex-row gap-8 mt-8  max-w-[800px]">
      <div className="text-color-clicado">{icon}</div>
      <div className="h-12 items-center flex font-lato ">{texto}</div>
    </div>
  );
}
