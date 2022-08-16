import React from "react";
import Router from "../Router/Router";
import s from "./Menu.module.css";
const Menu = () => {
  return (
    <div>
      <div className={s.aboutMenu}>
        <Router name={"About ISEA"} route={"/about"} />
        <Router name={"Contact"} route={"/contact"} />
        <Router name={"History"} route={"/abo"} />
        <Router name={"Institutional Structure"} route={"/bout"} />
        <Router name={"ISEA Membership"} route={"/ut"} />
        <Router name={"Official Documents"} route={"/ac"} />
        <Router name={"Senior Management"} route={"/abodut"} />
        <Router name={"Statute, Vision & Mission"} route={"/asbout"} />
      </div>
    </div>
  );
};

export default Menu;
