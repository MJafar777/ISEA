import React from "react";

import s from "./headerVideo.module.css";

import headerVideo from "../../img/headerVideo/isea.mp4";
import Button from "../Button/Button";
const HeaderVideo = () => {
  return (
    <div className={s.headerVideo}>
      <video autoPlay muted loop id={s.myVideo}>
        <source src={headerVideo} type="video/mp4" />
      </video>
      <div class={s.content}>
        <h1 className={s.title}>ISEA ORGANISATION</h1>
        <p className={s.description}>
          The main purpose of the activity: training and retraining of personnel
          at the international level in the field of solar energy, supporting
          the effective use of advanced technologies in the field of solar
          energy.
        </p>
        <Button link="/about" />
      </div>
    </div>
  );
};

export default HeaderVideo;
