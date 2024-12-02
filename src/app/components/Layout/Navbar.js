"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { navItems } from "@/constraints";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-white lg:bg-transparent fixed w-full z-10">
      <div className="container px-4 sm:px-6 lg:px-8 py-5 border-b-2">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link className="hidden lg:flex" href="/">
            <Image src="/travel_logo2.png" alt="logo" width={100} height={50} />
          </Link>
          <Link className="flex lg:hidden" href="/">
            <Image src="/travel_logo.png" alt="logo" width={100} height={50} />
          </Link>

          {/* navbar menu */}
          <ul className=" hidden h-full gap-12 lg:flex">
            {navItems.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="font-normal text-white flex-center text-base cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="flex gap-3 lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-fifth focus:outline-none"
            >
              {showMenu ? (
                <FaTimes width={24} height={24} />
              ) : (
                <FaBars width={24} height={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {showMenu && (
        <div className="lg:hidden bg-white ">
          <ul className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col justify-center items-center transition duration-300 bg-primary">
            {navItems.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="font-normal text-white flex-center cursor-pointer pb-1.5 transition duration-300 hover:font-bold hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
