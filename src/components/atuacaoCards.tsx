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
          <div className="front px-8 bg-color-black py-12 rounded-xl">
            <div className="content max-w-[325px]">
              <div className="text-color-clicado font-serif text-4xl">
                {numero}
              </div>
              <div className="font-medium text-color-clicado text-3xl mt-2 font-serif">
                {TituloFront}
              </div>
              <p className=" text-color-white/70 mt-8 font-lato text-[15px] h-28">
                {front}
              </p>
            </div>
          </div>
          <div className="back rounded-xl">
            <div className="content text-color-white p-4 text-center">
              <div className="text-xl">{TituloBack}</div>
              <p className="mt-4">{back}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
