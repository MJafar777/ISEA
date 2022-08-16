import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar({ name, route }) {
  return (
    <NavLink className={s.link} to={route}>
      {name}
    </NavLink>
  );
}
