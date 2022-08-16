import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo/neu.png";
import lang from "../../img/icons/lang.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const container = s.header + " " + "container";
  return (
    <div className={s.main}>
      <div className={container}>
        <NavLink className={s.link} to={"/"}>
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={s.links}>
          <div className={s.menuIcon}>
            <Navbar name="ABOUT" route={"/about"} />
            <Navbar name="OURWORK" route={"/ourwork"} />
            <Navbar name="RENEWABLES" route={"/renewables"} />
            <Navbar name="PUBLICATIONS" route={"/publications"} />
            <Navbar name="EDUCATION" route={"/education"} />
            <Navbar name="PUBLICATION" route={"/engineering"} />
            <Navbar name="PROJECT" route={"/project"} />
          </div>
          <div className={s.selector}>
            <img className={s.lang} src={lang} alt="lang" />
            <select className="select" name="language" id="language">
              <option value="eng">Eng</option>
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
