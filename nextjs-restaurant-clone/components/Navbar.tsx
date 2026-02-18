"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center bg-black py-2 px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0 z-40">
        <div className="flex justify-start items-center gap-2">
          <Image
            src="/images/logo3.png"
            alt="Bravo Logo"
            width={200}
            height={130}
            className="object-contain w-[80px] lg:w-[140px] h-auto"
          />
          <Image
            src="/images/logo-2.png"
            alt="Bravo Logo 2"
            width={200}
            height={130}
            className="object-contain w-[80px] lg:w-[140px] h-auto"
          />
        </div>

        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 duration-300">
          <li className="p__opensans hover:text-gray-300 cursor-pointer">
            <Link href="#home">Home</Link>
          </li>
          <li className="p__opensans hover:text-gray-300 cursor-pointer">
            <Link href="#about">About</Link>
          </li>
          <li className="p__opensans hover:text-gray-300 cursor-pointer">
            <button onClick={() => setIsMenuOpen(true)}>Menu</button>
          </li>
          <li className="p__opensans hover:text-gray-300 cursor-pointer">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div className="flex justify-end items-center gap-4">
          {/* View Menu Button — desktop */}
          <button
            className="hidden lg:inline-block custom__button text-sm"
            onClick={() => setIsMenuOpen(true)}
          >
            View Menu
          </button>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden">
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              className="cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />

            {toggleMenu && (
              <div className="fixed top-0 left-0 w-full h-[100vh] bg-black transition duration-500 flex flex-col justify-center items-center z-50 slide-bottom">
                <MdOutlineRestaurantMenu
                  fontSize={27}
                  className="text-golden cursor-pointer absolute top-5 right-5"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="list-none w-full flex flex-col items-center gap-8">
                  <li
                    className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="#home">Home</Link>
                  </li>
                  <li
                    className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="#about">About</Link>
                  </li>
                  <li
                    className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer"
                    onClick={() => {
                      setToggleMenu(false);
                      setIsMenuOpen(true);
                    }}
                  >
                    Menu
                  </li>
                  <li
                    className="p__opensans text-[2rem] text-golden hover:text-white cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
                {/* View Menu Button — mobile */}
                <button
                  className="custom__button mt-8 text-lg"
                  onClick={() => {
                    setToggleMenu(false);
                    setIsMenuOpen(true);
                  }}
                >
                  View Menu
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
