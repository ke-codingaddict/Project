"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center bg-black py-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex justify-start items-center">
        <Image 
          src="/images/logo.png" 
          alt="Bravo Logo" 
          width={150} 
          height={50} 
          className="object-contain" 
          
        />
      </div>
      
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 duration-300">
        <li className="p__opensans hover:text-gray-300 cursor-pointer"><Link href="#home">Home</Link></li>
        <li className="p__opensans hover:text-gray-300 cursor-pointer"><Link href="#about">About</Link></li>
        <li className="p__opensans hover:text-gray-300 cursor-pointer"><Link href="#menu">Menu</Link></li>
        <li className="p__opensans hover:text-gray-300 cursor-pointer"><Link href="#awards">Awards</Link></li>
        <li className="p__opensans hover:text-gray-300 cursor-pointer"><Link href="#contact">Contact</Link></li>
      </ul>

      <div className="hidden lg:flex justify-end items-center gap-4">

        <Link href="https://wa.me/2484346020" target="_blank" className="p__opensans hover:text-golden hover:underline transition duration-300">Book Table</Link>
      </div>

      <div className="flex lg:hidden">
        <GiHamburgerMenu color="#fff" fontSize={27} className="cursor-pointer" onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-[100vh] bg-black transition duration-500 flex flex-col justify-center items-center z-50 slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="text-golden cursor-pointer absolute top-5 right-5" onClick={() => setToggleMenu(false)} />
            <ul className="list-none w-full flex flex-col items-center gap-8">
              <li className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer" onClick={() => setToggleMenu(false)}><Link href="#home">Home</Link></li>
              <li className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer" onClick={() => setToggleMenu(false)}><Link href="#about">About</Link></li>
              <li className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer" onClick={() => setToggleMenu(false)}><Link href="#menu">Menu</Link></li>
              <li className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer" onClick={() => setToggleMenu(false)}><Link href="#awards">Awards</Link></li>
              <li className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer" onClick={() => setToggleMenu(false)}><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
