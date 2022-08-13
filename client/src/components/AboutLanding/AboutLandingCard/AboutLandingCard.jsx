import s from "../AboutLanding.module.css";
import React from "react";
import image from "../../../img/hero-Slider/2.jpg";
import Button from "../../button/Button";

export default function AboutLandingCard({ image, text }) {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img className={s.image} src={image} />
      </div>
      <div className={s.descrip}>
        <p>{text}</p>
        <Button />
      </div>
    </div>
  );
}
