import React from "react";
import s from "./footer.module.css";

import Facebook from "../../img/icon-web-prog/facebook.png";
import youtube from "../../img/icon-web-prog/youtube.png";
import Instagram from "../../img/icon-web-prog/Instagram.png";
import telegram from "../../img/icon-web-prog/telegram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className={s.footer}>
      <div className={s.foot}>
        <div className={s.footerTitle}>
          <NavLink to="/">
            <h4>ISEA</h4>
          </NavLink>
          <h6>© Energy Sources</h6>
        </div>
        <div className={s.footerTitle}>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/project">Project</NavLink>
        </div>
        <div className={s.footerTitle}>
          <a href="https://fb.@isea.uz">
            <img src={Facebook} alt="Facebook" />
            <span>Facebook</span>
          </a>

          <a href="https://youtube/@isea">
            <img src={youtube} alt="youtube" />
            <span>Youtube</span>
          </a>
          <a href="https://t.me/isea_uz">
            <img src={telegram} alt="telegram" />
            <span>telegram</span>
          </a>
          <a href="https://instagram/@isea_uz">
            <img src={Instagram} alt="Instagram" />
            <span>Instagram</span>
          </a>
        </div>
        <div className={s.footerTitle}>
          <h3>Subscribe to our newsletter</h3>
          <form className={s.forms} onSubmit={prevent}>
            <input maxLength={30} type="text" placeholder="Email Address" />
            <button>OK</button>
          </form>
        </div>
        <div className={s.footerTitle}>
          <p>International Solar Energy Institute</p>
          <a href="tel:+998947101600">+998947101600</a>
          <a href="/">Info@isea.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
