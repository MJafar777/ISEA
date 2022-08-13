import s from "../AboutLanding.module.css";
import React from "react";
import Button from "../../Button/Button";

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
