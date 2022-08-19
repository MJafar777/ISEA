import React from "react";
import { NavLink } from "react-router-dom";
import s from "../admin.module.css";

export default function Sidebar() {
  return (
    <>
      <nav className={s.sidebar}>
        <h1 className={s.title}>Admin</h1>
        <ul className={s.items}>
          <NavLink to={"/admin#users"}>
            <li className={s.item}>Users</li>
          </NavLink>
          <NavLink to={"/admin#books"}>
            <li className={s.item}>Books</li>
          </NavLink>
          <NavLink to={"/admin#news"}>
            <li className={s.item}>News</li>
          </NavLink>
          <NavLink to={"/admin#projects"}>
            <li className={s.item}>Projects</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
