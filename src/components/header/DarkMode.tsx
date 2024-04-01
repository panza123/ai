
'use client'

import { useTheme } from 'next-themes';
import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
export default function DarkMode() {
    const{theme,setTheme,systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    // {use to change background}

           
            <div className='mt-1 mr-2 '>
                <button onClick={()=> setTheme(theme ==="dark"? "light" : "dark")}>
                       {currentTheme === "dark"? <MdLightMode/>:<MdDarkMode/>}
                </button>
            </div>
           
    
  )
}