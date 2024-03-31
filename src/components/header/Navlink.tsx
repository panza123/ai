"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface NavLinkProps {
  item: {
    path: string;
    tittle: string; // Corrected typo from item.tittle to item.title
  };
  index: number;
}
// {used to navigate link when clicked}

const NavLink: React.FC<NavLinkProps> = ({ item, index }) => {
    const pathname = usePathname()
  return (
    <div>
      <Link href={item.path} key={index} 
      className={`text-xl ${pathname === item.path ? "rounded-[20px] p-[10px]  bg-black text-white ":
      ""}`}>
        {item.tittle}
      </Link>
    </div>
  );
};

export default NavLink;