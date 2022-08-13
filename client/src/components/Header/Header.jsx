import React from "react";
import headerStyle from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo/neu.svg";

const Header = () => {
  return (
    <div className={headerStyle.headerContainer}>
      <div className={headerStyle.header}>
        <img src={logo} alt="logo" />
        <div className={headerStyle.menuIcon}>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
