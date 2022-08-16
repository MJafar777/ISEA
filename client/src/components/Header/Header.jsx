import React from "react";
import s from "./header.module.css";

import { NavLink } from "react-router-dom";

import logo from "../../img/Logo/neu.png";

import lang from "../../img/icons/lang.svg";

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
            <NavLink className={s.link} to={"/about"}>
              ABOUT
            </NavLink>
            <NavLink className={s.link} to={"/ourwork"}>
              OUR WORK
            </NavLink>
            <NavLink className={s.link} to={"/renewables"}>
              RENEWABLES
            </NavLink>
            <NavLink className={s.link} to={"/newroom"}>
              NEWSROOM
            </NavLink>
            <NavLink className={s.link} to={"/publications"}>
              PUBLICATIONS
            </NavLink>
            <NavLink className={s.link} to={"/education"}>
              EDUCATION
            </NavLink>
            <NavLink className={s.link} to={"/data"}>
              DATA
            </NavLink>
            <NavLink className={s.link} to={"/events"}>
              EVENTS
            </NavLink>
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
