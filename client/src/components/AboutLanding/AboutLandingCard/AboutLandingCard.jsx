import s from "../AboutLanding.module.css";
import React from "react";
import image from "../../../img/hero-Slider/2.jpg";

export default function AboutLandingCard({ image, text }) {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img className={s.image} src={image} />
      </div>
      <div>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
