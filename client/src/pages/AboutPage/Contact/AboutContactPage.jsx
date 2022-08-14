import React from "react";
import AboutMenu from "../../../components/Menu/Menu";
import Title from "../../../components/Title/Title";
import s from "./AboutContactPage.module.css";
import contact from "../../../img/hero-Slider/contact.jpg";

const AboutContactPage = () => {
  return (
    <div className="container">
      <Title name={"Contact"} />
      <div className={s.contactUs}></div>
      <img src={contact} alt="batary" className={s.batary} />
      <div className={s.containerInfo}>
        <div className={s.leftContainer}></div>
        <hr />
        <div className={s.RightContainer}>
          <AboutMenu />
        </div>
      </div>
    </div>
  );
};

export default AboutContactPage;
