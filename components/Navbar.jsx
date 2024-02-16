"use client";

import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] my-1 bg-white transition ease transform duration-300`;
  return (
    <>
      <nav className="w-full sm:max-w-80 absolute top-0 right-0 flex justify-between items-center bg-[#FFC815] z-50">
        <div className="py-1 px-4">
          <h1 className="text-white text-xl font-semibold leading-[50px]">
            LOGO
          </h1>
        </div>
        <button
          className="flex flex-col justify-center items-center bg-black h-[60px] w-[60px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 ${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3 w-[32px]" : ""
            }`}
          />
          <div
            className={`w-9 ${genericHamburgerLine} ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 ${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-[8px] w-[32px]" : ""
            }`}
          />
        </button>
      </nav>
        <div className={`z-[49] absolute right-0 -top-[225px] w-full sm:w-80 transition ease-in-out duration-500 ${isOpen ? "translate-y-[285px]" : ""}`}>
          <ul className="flex flex-col justify-around items-center text-white bg-[#FFC815] text-[16px] ">
            <li className="mb-8">
              <Link href="/">HOME</Link>
            </li>
            <li className="mb-8">
              <Link href="/about">ABOUT US</Link>
            </li>
            <li className="mb-8">
              <Link href="/resume">RESUME</Link>
            </li>
            <li className="mb-8">
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="mb-8">
              <Link href="/Contact">CONTACT ME</Link>
            </li>
          </ul>
        </div>
    </>
  );
}
