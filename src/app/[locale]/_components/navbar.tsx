"use client";

import { useState } from "react";
import menu from "../../../../public/icon/menu.svg";
import Image from "next/image";
import LanguageBtn from "./langBtn";
import Links from "./links";
import { XSquare } from "@phosphor-icons/react/dist/ssr";
import logo from "../../../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-2 bg-transparent z-50 text-white">
      <div className="flex justify-between items-center">
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none z-50 relative"
          >
            {isOpen ? (
              <XSquare size={28} color="#f8fafc" />
            ) : (
              <Image src={menu} alt="menu icon" className="text-white" />
            )}
          </button>
        </div>
        <div className="text-zinc-950 font-extrabold hidden md:flex">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>

        <div className="hidden md:flex gap-7">
          <Links setIsOpen={setIsOpen} />
        </div>
        <div>
          <LanguageBtn />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-slate-950 z-40`}
      >
        <div>
          <Links setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
