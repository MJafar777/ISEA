import React, { useState } from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo/neu.png";
import lang from "../../img/icons/lang.svg";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import Router from "../../components/Router/Router";
import { useEffect } from "react";
import { checkMe } from "../../store/authSlice";

import top from "../../img/icons/chevron-top.svg";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkMe());
  }, []);
  const container = s.header + " " + "container";
  const dropdown = s.acardion + " " + "dropdown";

  const isAuth = useSelector((store) => store.auth.isAuth);
  return (
    <div className={s.main}>
      <div className={container}>
        <NavLink className={s.link} to={"/"}>
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={s.navMenu}>
          <div className={s.links}>
            <div className={s.menuIcon}>
              <div className={s.renewables}>
                <div className={s.topParent}>
                  <Navbar
                    className={s.acardion}
                    name="ABOUT"
                    route={"/about"}
                  />
                  <img src={top} className="bottomTop" alt="top" />
                </div>
                <div className={s.dropdownChild}>
                  <Router name={"About ISEA"} route={"/about"} />
                  <Router name={"ISEA LIDERSHIP"} route={"/isea-leadership"} />
                  <Router name={"Contact"} route={"/contact"} />
                  <Router name={"OURWORK"} route={"/ourwork"} />

                  <Router name={"History"} route={"/history"} />
                  <Router
                    name={"Institutional Structure"}
                    route={"/institutional-structure"}
                  />
                  <Router name={"ISEA Membership"} route={"/isea-membership"} />
                  <Router
                    name={"OfficialDocuments"}
                    route={"/official-documents"}
                  />
                  {/* <Router name={"Senior Management"} route={"/abodut"} /> */}
                  {/* <Router name={"Statute, Vision & Mission"} route={"/asbout"} /> */}
                </div>
              </div>

              <div className={s.renewables}>
                <div className={s.topParent}>
                  <Navbar
                    className={dropdown}
                    name="RENEWABLES"
                    route={"/benefits"}
                  />

                  <img src={top} className="bottomTop" alt="top" />
                </div>
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
                  <Router name={"Announcement"} route={"/Announcement"} />
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

              <Navbar name="NEWS" route={"/news"} />
              <Navbar name="PUBLICATIONS" route={"/publications"} />
              <Navbar name="EDUCATION" route={"/education"} />
              <Navbar name="ENGINEERING" route={"/engineering"} />
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
              <Profile />
            ) : (
              <>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
