import React from "react";
import Router from "../Router/Router";
import s from "./Menu.module.css";
const Menu = ({ children, title }) => {
  return (
    <div>
      <div className={s.aboutMenu}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Menu;
