"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import LanguageBtn from "./langBtn";
import Links from "./links";
import logo from "../../../../public/logo.png";
import menu from "../../../../public/icon/menu.svg";
import { XSquare } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 md:px-8 py-2 z-[999] transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-zinc-900/90 backdrop-blur-md"
          : "bg-transparent"
      } text-zinc-50`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-50 focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XSquare size={28} />
          ) : (
            <Image src={menu} alt="menu icon" width={28} height={28} />
          )}
        </button>

        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Links setIsOpen={setIsOpen} />
        </nav>

        <LanguageBtn />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-950 z-40 transition-opacity duration-300 flex-col justify-center items-center text-center`}
      >
        <Links setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Navbar;
