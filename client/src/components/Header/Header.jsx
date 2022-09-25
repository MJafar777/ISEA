import React, { useState } from "react";

import "./header.css";
import "./header.module.css";

import Navbar from "../Navbar/Navbar";
import Router from "../Router/Router";

import logo from "../../img/Logo/neu.avif";
import profile from "../../img/icons/profile.svg";
import flagUz from "../../img/flag/197416.png";
import flagRu from "../../img/flag/323300.png";
import flagEn from "../../img/flag/england-circle-512.webp";
import burger from "../../img/icons/burger/burger.svg";
import findIcon from "../../img/icons/find.svg";

const Header = () => {};

// const Header = () => {
//   const [burgerMenu, setBurgerMenu] = useState(true);

//   return (
//     <>
//       <header id="header" className="">
//         <div className="bg-[#222]">
//           <div className="container">
//             <div className="head flex justify-between">
//               <div className="left-head flex gap-4 items-center header-logo-container">
//                 <img className="w-[100px]" src={logo} alt="logo_img" />
//                 <p className="text-white capitalize text-lg tracking-[.1em]">
//                   international solar <br /> energy system
//                 </p>
//               </div>
//               <input
//                 id="menu-burger"
//                 type="checkbox"
//                 onClick={() => setBurgerMenu(!burgerMenu)}
//                 style={{ display: "none" }}
//               />
//               <label htmlFor="menu-burger" className="items-center menu-berger-label">
//                 <img className="w-[3.2rem] h-[3.2rem]" src={burger} alt="burger_menu" />
//               </label>
//               <div className="right-head navbarUl">
//                 <ul className="flex items-center">
//                   <li>
//                     {/* <div className="relative m-[1.6rem]">
//                       <input
//                         className="bg-transparent text-white outline-none border-2 border-[#0057BD] rounded-xl p-2"
//                         type="text"
//                         name="findIcon"
//                         id="findIcon"
//                       />
//                       <img
//                         className="absolute right-1 top-1/2 -translate-y-1/2 headerFindIcon"
//                         src={findIcon}
//                         alt="findIcon"
//                       />
//                     </div> */}
//                     <div className="m-[1rem] p-[.4rem] border-2 border-[#0057BD] rounded-xl">
//                       <img className="headerFindIcon" src={findIcon} alt="findIcon" />
//                     </div>
//                     <ul className="rounded-lg">
//                       <li className="bg-[#222] rounded-lg">
//                         <div className=" p-2   rounded-lg">
//                           <div className="relative">
//                             <input
//                               className="w-full bg-transparent text-white outline-none border-2 border-[#0057BD] rounded-xl p-2"
//                               type="text"
//                               name="findIcon"
//                               id="findIcon"
//                             />
//                             <img
//                               className="absolute right-1 top-1/2 -translate-y-1/2 headerFindIcon"
//                               src={findIcon}
//                               alt="findIcon"
//                             />
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a className="flex items-center gap-3" href="/">
//                       <img className="" src={flagEn} alt="arrow-down" />
//                       <span>EN</span>
//                     </a>
//                     <ul>
//                       <li>
//                         <a href="/">
//                           <img src={flagRu} alt="flagRu" />
//                           <span>RU</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/">
//                           <img src={flagUz} alt="flagUz" />
//                           <span>UZ</span>
//                         </a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a className="flex items-center gap-2" href="/">
//                       <img className="" src={profile} alt="profile" />
//                       <span>LOG IN</span>
//                     </a>
//                     <ul>
//                       <li>
//                         <a href="/">
//                           <img className="" src={profile} alt="profile" />
//                           <span>LOG IN</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/">
//                           <img className="" src={profile} alt="profile" />
//                           <span>LOG IN</span>
//                         </a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div
//         style={burgerMenu ? { display: "block" } : { display: "none" }}
//         className="header-navbar  md:bg-[#0057BD] md:w-full  uppercase "
//         // onClick={() => setBurgerMenu(!burgerMenu)}
//       >
//         <div className="sm:container inline">
//           <ul>
//             <li>
//               <Navbar className="hedaer-link" name="HOME" route={"/"} />
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="RENEWABLES" route={"/benefits"} />
//               <ul>
//                 <li>
//                   <Router className="chlidLink" name={"BENEFITS"} route={"/benefits"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"CLIMATE CHANGE"} route={"/climate-change"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"ENERGY TRANSITION"} route={"/energy-transition"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"FINANCE & INVESTMENT"} route={"/finance-and-investment"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"HEATING & COOLING"} route={"/heating-cooling"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"INNOVATION & TECHNOLOGY"} route={"/innovation-technology"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"COSTS"} route={"/costs"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"POWER"} route={"/power"} />
//                 </li>
//                 <li>
//                   <Router className="chlidLink" name={"INDUCTRY & TRANSPORT"} route={"/inductry-transport"} />
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="ABOUT" route={"/about"} />
//               <ul>
//                 <li>
//                   <Router name={"About ISEA"} route={"/about"} />
//                 </li>
//                 <li>
//                   <Router name={"ISEA LIDERSHIP"} route={"/isea-leadership"} />
//                 </li>
//                 <li>
//                   <Router name={"Contact"} route={"/contact"} />
//                 </li>
//                 <li>
//                   <Router name={"OURWORK"} route={"/ourwork"} />
//                 </li>
//                 <li>
//                   <Router name={"History"} route={"/history"} />
//                 </li>
//                 <li>
//                   <Router name={"Institutional Structure"} route={"/institutional-structure"} />
//                 </li>
//                 <li>
//                   <Router name={"ISEA Membership"} route={"/isea-membership"} />
//                 </li>
//                 <li>
//                   <Router name={"OfficialDocuments"} route={"/official-documents"} />
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="NEWS" route={"/news"} />
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="PUBLICATIONS" route={"/publications"} />
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="EDUCATION" route={"/education"} />
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="ENGINEERING" route={"/engineering"} />
//             </li>
//             <li>
//               <Navbar className="hedaer-link" name="PROJECT" route={"/project"} />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

export default Header;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { checkMe } from "../../store/authSlice";
// import "./header.css";
// import s from "./header.module.css";
// import Profile from "../Profile/Profile";
// import Router from "../Router/Router";

// import top from "../../img/icons/chevron-top.svg";
// import logo from "../../img/Logo/neu.avif";

// const Header = () => {
//   // to change burger classes
//   const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
//   const [menu_class, setMenuClass] = useState("menu hidden");
//   const [isMenuClicked, setIsMenuClicked] = useState(false);
//   // toggle burger menu change

//   const updateMenu = () => {
//     if (!isMenuClicked) {
//       setBurgerClass("burger-bar clicked");
//       setMenuClass("menu visible");
//     } else {
//       setBurgerClass("burger-bar unclicked");
//       setMenuClass("menu hidden");
//     }
//     setIsMenuClicked(!isMenuClicked);
//   };

//   const closeMenu = () => {
//     setBurgerClass("burger-bar unclicked");
//     setMenuClass("menu hidden");
//     setIsMenuClicked(false);
//   };

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(checkMe());
//   }, []);
//   const dropdown = s.acardion + " " + "dropdown";
//   const status = useSelector((store) => store.auth.status);
//   const isAuth = useSelector((store) => store.auth.isAuth);
//   // console.log(isAuth, status);
//   return (
//     <div className={s.head}>
//       <div className={s.menuParent}>
//         <NavLink className={s.link} to={"/"}>
//           <img className={s.logo} src={logo} alt="logo" />
//         </NavLink>
//         <div className={s.headerWidth}>
//           <div className="nav">
//             <div className={s.profile}>
//               {isAuth ? (
//                 <Profile />
//               ) : status === "loading" ? (
//                 ""
//               ) : (
//                 <div className={s.register}>
//                   <NavLink className={s.registerChild} to={"/login"}>
//                     Login
//                   </NavLink>
//                   <NavLink className={s.registerChild} to={"/register"}>
//                     Register
//                   </NavLink>
//                 </div>
//               )}
//             </div>

//             <div className={s.burgerMenu + " " + "burger-menu"} onClick={updateMenu}>
//               <div className={burger_class}></div>
//               <div className={burger_class}></div>
//               <div className={burger_class}></div>
//             </div>
//           </div>

//           <div className={menu_class}>
//             <div className={s.navMenu}>
//               <div className={s.links}>
//                 <div className={s.menuIcon}>
//                   <div className={s.profile} id={s.mobileProfile}>
//                     {isAuth ? (
//                       <Profile />
//                     ) : status === "loading" ? (
//                       ""
//                     ) : (
//                       <div className={s.register}>
//                         <NavLink className={s.registerChild} to={"/login"}>
//                           Login
//                         </NavLink>
//                         <NavLink className={s.registerChild} to={"/register"}>
//                           Register
//                         </NavLink>
//                       </div>
//                     )}
//                   </div>
//                   <div onClick={closeMenu}>
//                     <Navbar name="HOME" route={"/"} />
//                   </div>
//////////////////////////
//                   <div className={s.renewables}>
//                     <div className={s.topParent}>
//                       <Navbar className={dropdown} name="RENEWABLES" route={"/benefits"} />
//                       <img src={top} className="bottomTop" alt="top" />
//                     </div>
///////////////////////
//                     <div onClick={closeMenu} className={s.dropdownChild + " " + s.firstDropChild}>
//                       <Router name={"BENEFITS"} route={"/benefits"} />
//                       <Router name={"CLIMATE CHANGE"} route={"/climate-change"} />
//                       <Router name={"ENERGY TRANSITION"} route={"/energy-transition"} />
//                       <Router name={"FINANCE & INVESTMENT"} route={"/finance-and-investment"} />
//                       <Router name={"HEATING & COOLING"} route={"/heating-cooling"} />
//                       <Router name={"INNOVATION & TECHNOLOGY"} route={"/innovation-technology"} />
//                       <Router name={"COSTS"} route={"/costs"} />
//                       <Router name={"POWER"} route={"/power"} />
//                       <Router name={"INDUCTRY & TRANSPORT"} route={"/inductry-transport"} />
//                     </div>
//                   </div>
//                   <div className={s.renewables}>
////////////////////////////////////
//                     <div className={s.topParent}>
//                       <Navbar className={s.acardion} name="ABOUT" route={"/about"} />
//                       <img src={top} className="bottomTop" alt="top" />
//                     </div>
////////////////////////////////////
//                     <div onClick={closeMenu} className={s.dropdownChild}>
//                       <Router name={"About ISEA"} route={"/about"} />
//                       <Router name={"ISEA LIDERSHIP"} route={"/isea-leadership"} />
//                       <Router name={"Contact"} route={"/contact"} />
//                       <Router name={"OURWORK"} route={"/ourwork"} />

//                       <Router name={"History"} route={"/history"} />
//                       <Router name={"Institutional Structure"} route={"/institutional-structure"} />
//                       <Router name={"ISEA Membership"} route={"/isea-membership"} />
//                       <Router name={"OfficialDocuments"} route={"/official-documents"} />
//                       {/* <Router name={"Senior Management"} route={"/abodut"} /> */}
//                       {/* <Router name={"Statute, Vision & Mission"} route={"/asbout"} /> */}
//                     </div>
//                   </div>
////////////////////////////
//                   <div onClick={closeMenu}>
//                     <Navbar name="NEWS" route={"/news"} />
//                   </div>
//                   <div onClick={closeMenu}>
//                     <Navbar name="PUBLICATIONS" route={"/publications"} />
//                   </div>
//                   <div onClick={closeMenu}>
//                     <Navbar name="EDUCATION" route={"/education"} />
//                   </div>
//                   <div onClick={closeMenu}>
//                     <Navbar name="ENGINEERING" route={"/engineering"} />
//                   </div>
//                   <div onClick={closeMenu}>
//                     <Navbar name="PROJECT" route={"/project"} />
//                   </div>
//                 </div>
////////////////////////////
//                 {/* <div className={s.selector}>
//                   <img className={s.lang} src={lang} alt="lang" />
//                   <select className="select" name="language" id="language">
//                     <option value="eng">Eng</option>
//                     <option value="rus">Rus</option>
//                     <option value="uzb">Uzb</option>
//                   </select>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
