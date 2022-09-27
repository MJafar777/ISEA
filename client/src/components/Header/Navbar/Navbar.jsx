import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";

import Logo from "../../../img/Logo/neu.avif";
import profile from "../../../img/icons/profile.svg";
import flagUz from "../../../img/flag/197416.png";
import flagRu from "../../../img/flag/323300.png";
import flagEn from "../../../img/flag/england-circle-512.webp";
import findIcon from "../../../img/icons/find.svg";

const Navbar = ({ burgerMenu }) => {
  return (
    <nav className="bg-[#0057bd] text-[1.4rem] text-inherit md:text-white sticky top-0 left-0 right-0 z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-3 md:w-auto w-full md:hidden flex justify-center"></div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li>
            <Link to="/" className="py-3 px-3 inline-block hover:bg-[#222] text-white">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link className="py-3 px-3 inline-block hover:bg-[#222] text-white" to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 inline-block hover:bg-[#222] text-white" to="/publications">
              PUBLICATIONS
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 inline-block hover:bg-[#222] text-white" to="/education">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 inline-block hover:bg-[#222] text-white" to="/engineering">
              ENGINEERING
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 inline-block hover:bg-[#222] text-white" to="/project">
              PROJECT
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${burgerMenu ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
