"use client";

import React, { useState } from "react";
import navlink from "./index"; // Assuming NavLink is the correct import
import Navlink from "./Navlink";
import DarkMode from "./DarkMode";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
interface Props {
  id: number;
  tittle: string;
  link: string;
  path: string;
  item: string;
}

// {create link when u can clink onto next page}

const Header: React.FC<Props> = () => {
  const [nav, setNav] = useState<boolean>(false);
  function handleclick() {
    setNav(!nav);
  }
  return (
    <div className="w-full h-10 flex justify-between items-center px-2 lg:px-16 py-9 bg-slate-300 ">
      <h1 className="text-2xl text-red-500 font-bold">AI</h1>
      <div className="flex gap-5">
        {navlink.map((item, index) => (
          <div className="hidden lg:flex gap-3 ">
            <Navlink item={item} index={index} />
          </div>
        ))}
        <DarkMode />

        <div className="lg:hidden cursor-pointer  z-40" onClick={handleclick}>
          {!nav ? (
            <CiMenuBurger size={20} className="text-black" />
          ) : (
            <RxCross2 size={20} className="text-black" />
          )}
        </div>
      </div>

      {/* {menuHumburger} */}
      <menu
        className={
          nav
            ? "w-full h-screen absolute left-0 top-0 z-20 bg-white/90 mx-auto  gap-7 flex flex-col justify-center  items-center lg:hidden "
            : "hidden"
        }
      >
        {navlink.map((item, index) => (
          <div className="" onClick={handleclick}>
            <Navlink item={item} index={index} />
          </div>
        ))}
      </menu>
    </div>
  );
};

export default Header;
