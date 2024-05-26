import React from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { navbartext } from "./primitives";
import Link  from 'next/link';
import TextShimmer from "@/components/magicui/animated-shiny-text";

export const Navbar = () => {

  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky" >
      <NavbarContent justify="start">
        <NavbarItem>
          <Link href="/" className="flex items-center gap-2 group w-fit ">
            <Dot />
            <h1 className={navbartext({ color: 'foreground' })}>
                Opportunities
            </h1>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link href="/" className="flex items-center gap-2 group">
            <Triangle/>
            <h1 className={navbartext({ color: 'foreground' })}>
              How it Works
            </h1>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/" className="flex items-center gap-4 group">
            <Square/>
            <h1 className={navbartext({ color: 'foreground' })}>
              About Us
            </h1>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

function Dot() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white transition duration-400 group-hover:border-[6px]">
        <div className="w-2 h-2 bg-white rounded-full transition-all duration-400 group-hover:w-1 group-hover:h-1"></div>
      </div>
    </div>
  );
}

export default Navbar;

function Triangle(){
  return(
      <div className='flex'>
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div className="z-10 absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white transform group-hover:-translate-y-3 transition-transform duration-300"></div>
          <div className="absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white transform group-hover:translate-y-0 transition-transform duration-300"></div>
        </div>
      </div>
  )
}

function Square (){
  return(
    <div className='flex flex-col'>
      <div className='w-4 h-4 bg-white transform group-hover:-translate-x-2 transition-transform duration-300' />
      <div className='w-4 h-4 bg-white transform group-hover:translate-x-2 transition-transform duration-300' />
    </div>
  )
}