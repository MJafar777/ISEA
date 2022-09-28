import React from "react";
import "./footer.css";

import { NavLink } from "react-router-dom";
import youtube from "../../img/icons/circle_youtube.svg";
import facebook from "../../img/icons/circle_facebook.svg";
import telegram from "../../img/icons/circle_telegram.svg";
import instagram from "../../img/icons/circle_instagram.svg";
import telephoneIcon from "../../img/icons/telephone_call.svg";
import emailIcon from "../../img/icons/email_web.svg";
import topArrow from "../../img/icons/Group 1.svg";
import Headlogo from "../../img/Logo/neu.avif";
import emailIconBlack from "../../img/icons/email_web_black.svg";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-inherit text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] pt-16 pb-6 text-white footer">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 my-12 relative">
          <div className="flex flex-col gap-8 footerTitle">
            <div className="">
              <NavLink className="flex-col items-start" to="/">
                <img className="w-1/2 pb-2" src={Headlogo} alt="logo" />
              </NavLink>
            </div>
            <div className="">
              <h2>About us</h2>
              <p>Supporting the effective use of advanced technologies in the field of solar energy.</p>
            </div>
            <div>
              <h2>Contact Us</h2>
              <p>
                <NavLink className="flex gap-2" to="tel:947101600">
                  <img className="h-full fill-white" src={telephoneIcon} alt="telImg" />
                  <span>+988 94 710 16 00</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="flex gap-2" to="info@isea.com">
                  <img className="h-full" src={emailIcon} alt="telImg" />
                  <span>info@isea.com</span>
                </NavLink>
              </p>
            </div>
          </div>
          <div className="footerTitle">
            <h2>Information</h2>
            <ul>
              <li>
                <p>
                  <NavLink to="innovation-technology">Innovation & Technology</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="climate-change">Climate Change</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/news">Latest News</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/education">Education</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/about">About Us</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/cotact">Contact</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/project">Project</NavLink>
                </p>
              </li>
            </ul>
          </div>
          <div className="footerTitle">
            <h2>Helpful Links</h2>
            <ul className="capitalize text-inherit">
              <li>
                <p>
                  <NavLink to="/institutional-structure">Institutional Structure</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/official-documents">Official Documents</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/isea-membership">Isea Membership</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/about">About Isea</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/ourwork">Ourwork</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/history">History</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/contact">Contact</NavLink>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center flex-col footerTitle">
            <h2 className="text-white">Subscribe More Info</h2>
            <form action="footerForm forms">
              <div className="relative">
                <img
                  className="w-[20px] absolute left-2 top-1/2 -translate-y-1/2"
                  src={emailIconBlack}
                  alt="emailIcon"
                />
                <input type="text" name="formInput" id="formInput" placeholder="Enter your email" />
              </div>
              <button className="transition hover:scale-105">Subscribe</button>
            </form>
          </div>
          <div id="#header" className="topArrowcircle scroll-smooth absolute bottom-0 right-0">
            <a href="#header">
              <img src={topArrow} alt="topArrow" />
            </a>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-10 items-center">
          <div></div>
          <div className="flex gap-4">
            <img
              className="duration-[.6s] ease-[cubic-bezier(0.45,-0.01, 1, 1.51)] hover:rotate-[360deg]"
              src={facebook}
              alt="facebook"
            />
            <img
              className="duration-[.6s] ease-[cubic-bezier(0.45,-0.01, 1, 1.51)] hover:rotate-[360deg]"
              src={instagram}
              alt="facebook"
            />
            <img
              className="duration-[.6s] ease-[cubic-bezier(0.45,-0.01, 1, 1.51)] hover:rotate-[360deg]"
              src={telegram}
              alt="facebook"
            />
            <img
              className="duration-[.6s] ease-[cubic-bezier(0.45,-0.01, 1, 1.51)] hover:rotate-[360deg]"
              src={youtube}
              alt="facebook"
            />
          </div>
          <div>
            <p>© Energy Sources</p>
          </div>
        </div>
      </div>
    </footer>
  );
  // const prevent = (e) => {
  //   e.preventDefault();
  // };
  // return (
  //   <div className={s.footer}>
  //     <div className={s.foot}>
  //       <div className={s.footerTitle}>
  //         <NavLink to="/">
  //           <h4>ISEA</h4>
  //         </NavLink>
  //         <h6>© Energy Sources</h6>
  //       </div>
  //       <div className={s.footerTitle}>
  //         <NavLink to="/about">About Us</NavLink>
  //         <NavLink to="/contact">Contact</NavLink>
  //         <NavLink to="/project">Project</NavLink>
  //       </div>
  //       <div className={s.footerTitle}>
  //         <NavLink to="https://fb.@isea.uz">
  //           <img src={Facebook} alt="Facebook" />
  //           <span>Facebook</span>
  //         </NavLink>

  //         <NavLink to="https://youtube/@isea">
  //           <img src={youtube} alt="youtube" />
  //           <span>Youtube</span>
  //         </NavLink>
  //         <NavLink to="https://t.me/isea_uz">
  //           <img src={telegram} alt="telegram" />
  //           <span>telegram</span>
  //         </NavLink>
  //         <NavLink to="https://instagram/@isea_uz">
  //           <img src={Instagram} alt="Instagram" />
  //           <span>Instagram</span>
  //         </NavLink>
  //       </div>
  //       <div className={s.footerTitle}>
  //         <h3>Subscribe to our newsletter</h3>
  //         <form className={s.forms} onSubmit={prevent}>
  //           <input maxLength={30} type="text" placeholder="Email Address" />
  //           <button>OK</button>
  //         </form>
  //       </div>
  //       <div className={s.footerTitle}>
  //         <p>International Solar Energy Institute</p>
  //         <NavLink to="tel:+998947101600">+998947101600</NavLink>
  //         <NavLink to="/">Info@isea.com</NavLink>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Footer;
