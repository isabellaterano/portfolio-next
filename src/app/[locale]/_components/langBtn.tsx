"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "@/navigation";
import { Translate } from "@phosphor-icons/react/dist/ssr";

const LanguageBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const changeLanguage = (locale: string) => {
    router.push(pathname, { locale });
    closeDropdown();
  };

  return (
    <div>
      <button
        type="button"
        className="px-1 py-1 bg-slate-100 hover:bg-slate-200 text-black font-medium rounded-md text-sm inline-flex items-center"
        onClick={toggleDropdown}
      >
        <Translate size={24} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li onClick={() => changeLanguage("en")}>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 hover:rounded-tl-md">
                English
              </button>
            </li>
            <li onClick={() => changeLanguage("pt")}>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 hover:rounded-bl-md">
                Português
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageBtn;
