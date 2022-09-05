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
          Our ISEA organization serves to provide solar cells to the population
          and to develop solar cells using solar energy effectively.
        </p>
        <Button link="/about" />
      </div>
    </div>
  );
};

export default HeaderVideo;
