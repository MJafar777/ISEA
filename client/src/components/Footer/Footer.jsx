import React from "react";
import s from "./footer.module.css";

import Facebook from "../../img/icon-web-prog/facebook.png";
import Twitter from "../../img/icon-web-prog/Twitter.png";
import Instagram from "../../img/icon-web-prog/Instagram.png";

const Footer = () => {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className={s.footer}>
      <div className={s.foot}>
        <div className={s.footerTitle}>
          <h4>ISEA</h4>
          <h6>© Energy Sources</h6>
        </div>
        <div className={s.footerTitle}>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Terms & Conditions</a>
        </div>
        <div className={s.footerTitle}>
          <a href="/">
            <img src={Facebook} alt="Facebook" />
            <span>Facebook</span>
          </a>
          <a href="/">
            <img src={Twitter} alt="Twitter" />
            <span>Twitter</span>
          </a>
          <a href="/">
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
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+998977773767</p>
          <a href="/">mirzaraximovjafar2001@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
