import React from "react";
import Title from "../../../components/Title/Title";
import s from "./AboutContactPage.module.css";
import contact from "../../../img/hero-Slider/contact.jpg";

const AboutContactPage = () => {
  return (
    <div className="container">
      <Title name={"Contact"} />
      <img src={contact} alt="contact" className={s.contact} />
      <div className={s.contactUs}>
        <div className={s.containerInfo}>
          <div className={s.leftContainer}></div>
          <hr />
          <div className={s.RightContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactPage;
