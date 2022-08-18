import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo/neu.png";
import lang from "../../img/icons/lang.svg";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

import Router from "../../components/Router/Router";

const Header = () => {
  const container = s.header + " " + "container";
  const dropdown = s.acardion + " " + "dropdown";
  const isAuth = false;
  return (
    <div className={s.main}>
      <div className={container}>
        <NavLink className={s.link} to={"/"}>
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={s.links}>
          <div className={s.menuIcon}>
            <div className={s.renewables}>
              <Navbar className={s.acardion} name="ABOUT▼" route={"/about"} />
              <div className={s.dropdownChild}>
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
            <Navbar className={s.acardion} name="OURWORK▼" route={"/ourwork"} />

            <div className={s.renewables}>
              <Navbar
                className={dropdown}
                name="RENEWABLES▼"
                route={"/renewables"}
              />
              <div className={s.dropdownChild}>
                <Router name={"BENEFITS"} route={"/benefits"} />
                <Router name={"CLIMATE CHANGE"} route={"/climate-change"} />
                <Router
                  name={"ENERGY TRANSITION"}
                  route={"/energy-transition"}
                />
                <Router
                  name={"FINANCE & INVESTMENT"}
                  route={"/finance-and-investment"}
                />
                <Router
                  name={"BENEFITSHEATING & COOLING"}
                  route={"/benefitsheating-and-cooling"}
                />
                <Router
                  name={"INNOVATION & TECHNOLOGY"}
                  route={"/innovation-technology"}
                />
                <Router
                  name={"OFF-GRID FOR ENERGY ACCESS"}
                  route={"/off-grid"}
                />
                <Router name={"POLICY"} route={"/policy"} />
                <Router
                  name={"INDUCTRY & TRANSPORT"}
                  route={"/inductry-transport"}
                />
                <Router name={"COSTS"} route={"/costs"} />
                <Router name={"ISLANDS"} route={"/islands"} />
                <Router name={"POWER"} route={"/power"} />
              </div>
            </div>

            <Navbar name="PUBLICATIONS" route={"/publications"} />
            <Navbar name="EDUCATION" route={"/education"} />
            <Navbar name="PUBLICATION" route={"/engineering"} />
            <Navbar name="PROJECT" route={"/project"} />
          </div>
          {/* <div className={s.selector}>
             <img className={s.lang} src={lang} alt="lang" />
            <select className="select" name="language" id="language">
              <option value="eng">Eng</option>
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </select> 
          </div> */}
        </div>
        <div className={s.profile}>
          {isAuth ? (
            <Profile name={"Niyozbek Pulatov"} image={"111"} />
          ) : (
            <>
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
