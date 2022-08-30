import React from "react";
import { useEffect } from "react";
import {
  AiFillBook,
  AiFillProfile,
  AiFillProject,
  AiFillAlert,
  AiFillSetting,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "../admin.module.css";
import { logout } from "../../../store/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(logout());
  };

  const role = useSelector((store) => store.auth.user?.role) || "user";
  return (
    <>
      <nav className={s.sidebar}>
        {role === "admin" ? (
          <>
            <h1 className={s.title}>User</h1>
            <ul className={s.items}>
              <NavLink to={"/me#advanced_settings"}>
                <AiFillSetting className={s.icon} />
                <li className={s.item}>Settings</li>
              </NavLink>
              <NavLink to={"/me#myproject"}>
                <AiFillProject className={s.icon} />
                <li className={s.item}>My Projects</li>
              </NavLink>
              <div className={s.logout}>
                <NavLink className={s.item} to="/login" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </div>
            </ul>
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
          </>
        ) : (
          <>
            {" "}
            <h1 className={s.title}>User</h1>
            <ul className={s.items}>
              <NavLink to={"/me"}>
                <AiFillSetting className={s.icon} />
                <li className={s.item}>Settings</li>
              </NavLink>
              <NavLink to={"/me#myproject"}>
                <AiFillProject className={s.icon} />
                <li className={s.item}>My Projects</li>
              </NavLink>
              <div className={s.logout}>
                <NavLink className={s.item} to="/login" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </div>
            </ul>
          </>
        )}
      </nav>
    </>
  );
}
