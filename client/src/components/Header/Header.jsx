import React from "react";
import s from "./header.module.css";
import { NavLink, Router } from "react-router-dom";
import logo from "../../img/Logo/neu.png";
import lang from "../../img/icons/lang.svg";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

import Routers from "../../components/Router/Router";

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
            <Navbar className={s.acardion} name="ABOUT▼" route={"/about"} />
            <Navbar className={s.acardion} name="OURWORK▼" route={"/ourwork"} />

            <div className={s.renewables}>
              <Navbar
                className={dropdown}
                name="RENEWABLES▼"
                route={"/renewables"}
              />
              <div className={s.dropdownChild}>
                <Routers name={"BENEFITS"} route={"/benefits"} />
                <Routers name={"CLIMATE CHANGE"} route={"/climate-change"} />
                <Routers
                  name={"ENERGY TRANSITION"}
                  route={"/energy-transition"}
                />
                <Routers
                  name={"FINANCE & INVESTMENT"}
                  route={"/finance-and-investment"}
                />
                <Routers
                  name={"BENEFITSHEATING & COOLING"}
                  route={"/benefitsheating-and-cooling"}
                />
                <Routers
                  name={"INNOVATION & TECHNOLOGY"}
                  route={"/innovation-technology"}
                />
                <Routers
                  name={"OFF-GRID FOR ENERGY ACCESS"}
                  route={"/off-grid"}
                />
                <Routers name={"POLICY"} route={"/policy"} />
                <Routers
                  name={"INDUCTRY & TRANSPORT"}
                  route={"/inductry-transport"}
                />
                <Routers name={"COSTS"} route={"/costs"} />
                <Routers name={"ISLANDS"} route={"/islands"} />
                <Routers name={"POWER"} route={"/power"} />
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
