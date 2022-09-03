import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkMe } from "../../store/authSlice";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import s from "./header.module.css";
import Profile from "../Profile/Profile";
import Router from "../Router/Router";
import top from "../../img/icons/chevron-top.svg";
import logo from "../../img/Logo/neu.avif";

const Header1 = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkMe());
  }, []);
  const dropdown = s.acardion + " " + "dropdown";
  const status = useSelector((store) => store.auth.status);
  const isAuth = useSelector((store) => store.auth.isAuth);
  return (
    <div className={s.menuParent}>
      <NavLink className={s.link} to={"/"}>
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={s.headerWidth}>
        <nav>
          <div className={s.profile}>
            {isAuth ? (
              <Profile />
            ) : status === "loading" ? (
              ""
            ) : (
              <div className={s.register}>
                <NavLink className={s.registerChild} to={"/login"}>
                  Login
                </NavLink>
                <NavLink className={s.registerChild} to={"/register"}>
                  Register
                </NavLink>
              </div>
            )}
          </div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>

        <div className={menu_class}>
          <div className={s.navMenu}>
            <div className={s.links}>
              <div className={s.menuIcon}>
                
                <Navbar name="HOME" route={"/"} />

                <div className={s.renewables}>
                  <div className={s.topParent}>
                    <Navbar
                      className={dropdown}
                      name="RENEWABLES"
                      route={"/benefits"}
                    />
                    <img src={top} className="bottomTop" alt="top" />
                  </div>
                  <div className={s.dropdownChild + " " + s.firstDropChild}>
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
                      name={"HEATING & COOLING"}
                      route={"/heating-cooling"}
                    />
                    <Router
                      name={"INNOVATION & TECHNOLOGY"}
                      route={"/innovation-technology"}
                    />
                    <Router name={"COSTS"} route={"/costs"} />
                    <Router name={"POWER"} route={"/power"} />
                    <Router
                      name={"INDUCTRY & TRANSPORT"}
                      route={"/inductry-transport"}
                    />
                  </div>
                </div>

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
                    <Router
                      name={"ISEA LIDERSHIP"}
                      route={"/isea-leadership"}
                    />
                    <Router name={"Contact"} route={"/contact"} />
                    <Router name={"OURWORK"} route={"/ourwork"} />

                    <Router name={"History"} route={"/history"} />
                    <Router
                      name={"Institutional Structure"}
                      route={"/institutional-structure"}
                    />
                    <Router
                      name={"ISEA Membership"}
                      route={"/isea-membership"}
                    />
                    <Router
                      name={"OfficialDocuments"}
                      route={"/official-documents"}
                    />
                    {/* <Router name={"Senior Management"} route={"/abodut"} /> */}
                    {/* <Router name={"Statute, Vision & Mission"} route={"/asbout"} /> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
