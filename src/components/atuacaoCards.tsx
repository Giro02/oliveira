import React, { ReactNode } from "react";
import "../styles/atuacaoCards.css";

type Itemprops = {
  numero: string;
  TituloFront: string;
  front: string;
  back: string;
  TituloBack: string;
};

export default function atuacaoCards({
  numero,
  TituloFront,
  front,
  back,
  TituloBack,
}: Itemprops) {
  return (
    <div className="container">
      <div className="row flip-boxes">
        <div className="col-md-3 col-sm-4 col-8 flip-box">
          <div className="front shadow-md px-6 py-6">
            <div className="content max-w-[400px]">
              <div className="text-color-clicado text-4xl">{numero}</div>
              <div className="font-medium text-4xl mt-6 ">{TituloFront}</div>
              <div className=" text-lg text-color-blacktrans mt-6">{front}</div>
            </div>
          </div>
          <div className="back">
            <div className="content text-color-white p-4 text-center">
              <div className="text-xl">{TituloBack}</div>
              <div className="mt-4">{back}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
