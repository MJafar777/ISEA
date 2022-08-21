import React from "react";
import {
  AiFillBook,
  AiFillProfile,
  AiFillProject,
  AiFillAlert,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import s from "../admin.module.css";

export default function Sidebar() {
  return (
    <>
      <nav className={s.sidebar}>
        <h1 className={s.title}>Admin</h1>
        <ul className={s.items}>
          <NavLink to={"/me#users"}>
            <AiFillProfile className={s.icon} />
            <li className={s.item}>Users</li>
          </NavLink>
          <NavLink to={"/me#books"}>
            <AiFillBook className={s.icon} />
            <li className={s.item}>Books</li>
          </NavLink>
          <NavLink to={"/me#news"}>
            <AiFillAlert className={s.icon} />
            <li className={s.item}>News</li>
          </NavLink>
          <NavLink to={"/me#projects"}>
            <AiFillProject className={s.icon} />
            <li className={s.item}>Projects</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
