import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo/neu.svg";

const Header = () => {
  const container = s.header + " " + "container";
  return (
    <div className={s.main}>
      <div className={container}>
        <img src={logo} alt="logo" />
        <div className={s.menuIcon}>
          <NavLink className={s.link} to={"/about"}>
            About
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
      </div>
    </div>
  );
};

export default Header;
