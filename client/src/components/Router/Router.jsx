import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Router.module.css";
const Router = ({ name, route }) => {
  return (
    <div>
      <NavLink className={s.linkAboutMenu} to={route}>
        {name}
      </NavLink>
    </div>
  );
};

export default Router;
