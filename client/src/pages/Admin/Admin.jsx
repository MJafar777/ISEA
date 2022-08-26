import React from "react";
import { useLocation } from "react-router-dom";
import s from "./admin.module.css";
import Books from "./Main/Books/Books";
import Users from "./Main/Users/Users";
import Projects from "./Main/Projects/Projects";
import News from "./Main/News/News";
import Sidebar from "./Sidebar/Sidebar";
import AddUser from "./Main/Users/AddUser/AddUser";

export default function Admin() {
  const navigate = useLocation();

  return (
    <div className={s.container}>
      <Sidebar />
      <div className={s.main}>
        {navigate.hash === "#books" ? (
          <Books />
        ) : navigate.hash === "#users" ? (
          <Users />
        ) : navigate.hash === "#news" ? (
          <News />
        ) : navigate.hash === "#projects" ? (
          <Projects />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
