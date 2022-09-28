import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";
import "./header.module.css";

import NavbarSection from "./Navbar/Navbar";

import logo from "../../img/Logo/neu.avif";
import profile from "../../img/icons/profile.svg";
import flagUz from "../../img/flag/197416.png";
import flagRu from "../../img/flag/323300.png";
import flagEn from "../../img/flag/england-circle-512.webp";
import burger from "../../img/icons/burger/burger.svg";
import findIcon from "../../img/icons/find.svg";
import lang from "./../../img/icons/lang.svg";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <>
      <header id="header ">
        <div className="bg-[#222]">
          <div className="container">
            <div className="head flex justify-between">
              <Link className="flex items-center" to="/">
                <div className="left-head flex gap-4 items-center header-logo-container">
                  <img className="w-[100px]" src={logo} alt="logo_img" />
                  <p className="text-white capitalize text-lg tracking-[.1em]">
                    international solar <br /> energy system
                  </p>
                </div>
              </Link>
              <input
                id="menu-burger"
                type="checkbox"
                onClick={() => setBurgerMenu(!burgerMenu)}
                style={{ display: "none" }}
              />
              <label htmlFor="menu-burger" className="items-center menu-berger-label">
                <img className="w-[3.2rem] h-[3.2rem]" src={burger} alt="burger_menu" />
              </label>
              <div className="right-head navbarUl">
                <ul className="flex items-center">
                  <li>
                    <div className="m-[1rem] p-[.4rem] border-2 border-[#0057BD] rounded-xl flex items-center gap-4">
                      <img className="headerFindIcon" src={findIcon} alt="findIcon" />
                    </div>
                    <ul className="rounded-lg lg:!w-80 md:!w-72 sm:!w-60 !w-52">
                      <li className="bg-[#222] rounded-lg">
                        <div className="p-2 rounded-lg flex gap-1">
                          <div className="relative">
                            <input
                              className="w-full bg-transparent text-white !pr-4 outline-none border-2 border-[#0057BD] rounded-xl p-2"
                              type="text"
                              name="findIcon"
                              id="findIcon"
                              placeholder={"Search from services"}
                            />
                          </div>
                          <div className="bg-[#0057BD] hover:bg-[#4a9eff] w-16 flex items-center justify-center rounded-lg">
                            <img className="headerFindIcon" src={findIcon} alt="findIcon" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="flex items-center gap-3 p-4">
                      <img className="" src={lang} alt="arrow-down" />
                      <span>Lang</span>
                    </span>
                    <ul>
                      <li>
                        <a href="/">
                          <img src={flagRu} alt="flagRu" />
                          <span>Ru</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src={flagUz} alt="flagUz" />
                          <span>Uz</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src={flagEn} alt="flagEng" />
                          <span>Eng</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="flex items-center gap-2 py-4">
                      <img className="" src={profile} alt="profile" />
                      <span>Profil</span>
                    </span>
                    <ul>
                      <li>
                        <NavLink to="/login">
                          <span>Sign in</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/register">
                          <span>Sign up</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavbarSection burgerMenu={burgerMenu} />
    </>
  );
};
export default Header;
