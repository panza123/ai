"use client";
import React, { useState } from "react";
import navlink from "./index"; // Assuming navlink is an array of blog items
import Link from "next/link";
import DarkMode from "./DarkMode";
import { usePathname } from "next/dist/client/components/navigation";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
interface Blog {
  id: number;
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  function handeleClick() {
    setNav(!nav);
  }

  return (
    <header className="w-full h-10 flex justify-between items-center px-2 lg:px-16 py-9 bg-slate-300 relative">
      <div className="flex w-full h-full justify-between items-center">
        <h1 className="font-bold text-3xl text-black">AI</h1>
        <nav className="hidden lg:flex items-center gap-2">
          <DarkMode />
          {navlink.map((item: Blog) => (
            <ul key={item.id} className="font-2xl">
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`text-2xl ${
                    pathname === item.path
                      ? "rounded-[20px] p-3 bg-black text-white"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
        {/* {menu toogle} */}
      </div>
      <div className="flex lg:hidden items-center">
      <DarkMode/>
      <div
        className="block lg:hidden cursor-pointer z-20"
        onClick={handeleClick}
      >
        
        {!nav ? (
          <CiMenuBurger className="text-black" />
        ) : (
          <FaTimes className="text-black" />
        )}
      </div>
      </div>
      {/* {menuDisplay} */}
      <menu
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-10 text-black"
            : "hidden"
        }
        onClick={handeleClick}
      >
     
        <nav className="flex flex-col gap-4  lg:hidden">
          {navlink.map((item: Blog) => (
            <ul key={item.id} className="font-2xl">
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`text-2xl ${
                    pathname === item.path
                      ? "rounded-[20px] p-3 bg-black text-white"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </menu>
    </header>
  );
};

export default Header;
