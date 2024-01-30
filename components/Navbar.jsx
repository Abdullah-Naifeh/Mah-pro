"use client";

import { useState } from "react";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="flex justify-between items-center bg-[#FFC815] ">
      <div className="py-1 px-4">
        <h1 className="text-white text-xl font-semibold leading-[50px]">
          LOGO
        </h1>
      </div>

      <div>
        <ul className="hidden md:flex flex-col md:flex-row justify-around text-white text-[16px]">
          <li className="md:mr-8">
            <a href="http://">HOME</a>
          </li>
          <li className="md:mr-8">
            <a href="http://">ABOUT US</a>
          </li>
          <li className="md:mr-8">
            <a href="http://">RESUME</a>
          </li>
          <li className="md:mr-8">
            <a href="http://">PORTFOLIO</a>
          </li>
          <li className="md:mr-8">
            <a href="http://">CONTACT ME</a>
          </li>
        </ul>
      </div>

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

      {clicked ? (
                <div>
                <ul className="flex flex-col md:flex-row justify-around text-white text-[16px]">
                  <li className="md:mr-8">
                    <a href="/page.js">HOME</a>
                  </li>
                  <li className="md:mr-8">
                    <a href="http://">ABOUT US</a>
                  </li>
                  <li className="md:mr-8">
                    <a href="http://">RESUME</a>
                  </li>
                  <li className="md:mr-8">
                    <a href="http://">PORTFOLIO</a>
                  </li>
                  <li className="md:mr-8">
                    <a href="http://">CONTACT ME</a>
                  </li>
                </ul>
              </div>
      ) : (
        ""
      )}
    </nav>
  );
}
