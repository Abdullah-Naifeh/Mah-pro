"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center bg-[#FFC815] z-50">
      <div className="py-1 px-4">
        <h1 className="text-white text-xl font-semibold leading-[50px]">
          LOGO
        </h1>
      </div>

      <div>
        <ul className="hidden md:flex flex-col md:flex-row justify-around text-white text-[16px]">
          <li className="md:mr-8">
            <Link href="/">HOME</Link>
          </li>
          <li className="md:mr-8">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="md:mr-8">
            <Link href="/resume">RESUME</Link>
          </li>
          <li className="md:mr-8">
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="md:mr-8">
            <Link href="/contact">CONTACT ME</Link>
          </li>
        </ul>
      </div>

      {clicked ? (
        <div>
          <ul className="flex flex-col md:flex-row justify-around text-white text-[16px]">
            <li className="md:mr-8">
              <Link href="/">HOME</Link>
            </li>
            <li className="md:mr-8">
              <Link href="/about">ABOUT US</Link>
            </li>
            <li className="md:mr-8">
              <Link href="http://">RESUME</Link>
            </li>
            <li className="md:mr-8">
              <Link href="http://">PORTFOLIO</Link>
            </li>
            <li className="md:mr-8">
              <Link href="/Contact">CONTACT ME</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <button
        onClick={() => {
          if (clicked == false) {
            setClicked(true);
          } else {
            setClicked(false);
          }
        }}
        className="md:hidden flex flex-col justify-center items-center bg-black w-[60px] h-[60px] cursor-pointer"
      >
        <span className="bg-white w-6 h-[2px]"></span>
        <span className="bg-white w-9 h-[2px] my-2"></span>
        <span className="bg-white w-6 h-[2px]"></span>
      </button>
    </nav>
  );
}
