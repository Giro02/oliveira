import React, { ReactNode, PropsWithChildren } from "react";

type ItemProps = PropsWithChildren<{
  onClick?: () => void;
  className?: string;
}>;

function BotaoSocial({ onClick, children, className }: ItemProps) {
  return (
    <div
      onClick={onClick}
      className={`${className} hover:text-color-white  border-color-clicado hover:bg-color-clicado transition-all ease-in flex justify-center items-center min-h-[40px] w-11 hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10`}
    >
      {children}
    </div>
  );
}
BotaoSocial.variants = {
  footer: {
    className: "border",
  },
  header: {
    className: "border-r",
  },
};
export default BotaoSocial;
