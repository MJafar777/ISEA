import React from "react";

import Router from "../Router/Router";
import Title from "../Title/Title";
import s from "./Menu.module.css";
const AboutMenu = () => {
  return (
    <div>
      <div className={s.aboutMenu}>
        <Title name={"About Menu"} />
        <Router name={"About ISEA"} route={"/about"} />
        <Router name={"Contact"} route={"/AboutContactPage"} />
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

export default AboutMenu;
