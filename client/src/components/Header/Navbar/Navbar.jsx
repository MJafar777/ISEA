import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useTranslation } from "react-i18next";

const Navbar = ({ burgerMenu }) => {
  const { t } = useTranslation();
  return (
    <nav className=" md:bg-[#0057bd] text-[1.4rem] text-inherit md:text-white sticky top-0 left-0 right-0 z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-3 md:w-auto w-full md:hidden flex justify-center"></div>
        <ul className="md:flex flex-wrap hidden justify-center items-center md:gap-2 lg:gap-8">
          <li>
            <Link to="/" className="py-3 px-3 uppercase block hover:bg-[#222] text-white">
              {t("Navbar.1")}
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link className="py-3 px-3 uppercase block hover:bg-[#222] text-white" to="/news">
              {t("Navbar.4")}
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 uppercase block hover:bg-[#222] text-white" to="/publications">
              {t("Navbar.5")}
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 uppercase block hover:bg-[#222] text-white" to="/education">
              {t("Navbar.6")}
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 uppercase block hover:bg-[#222] text-white" to="/engineering">
              {t("Navbar.7")}
            </Link>
          </li>
          <li>
            <Link className="py-3 px-3 uppercase block hover:bg-[#222] text-white" to="/project">
              {t("Navbar.8")}
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
            <Link
              to="/"
              className="py-7 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
            >
              {t("Navbar.1")}
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link
              className="py-3 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
              to="/news"
            >
              {t("Navbar.4")}
            </Link>
          </li>
          <li>
            <Link
              className="py-3 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
              to="/publications"
            >
              {t("Navbar.5")}
            </Link>
          </li>
          <li>
            <Link
              className="py-3 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
              to="/education"
            >
              {t("Navbar.6")}
            </Link>
          </li>
          <li>
            <Link
              className="py-3 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
              to="/engineering"
            >
              {t("Navbar.7")}
            </Link>
          </li>
          <li>
            <Link
              className="py-3 px-3 uppercase block hover:bg-[#222] text-[#222] hover:text-white md:text-white"
              to="/project"
            >
              {t("Navbar.8")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
