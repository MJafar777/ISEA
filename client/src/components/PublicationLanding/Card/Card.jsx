import React from "react";
import s from "../publicationLanding.module.css";

export default function Card({ image, title }) {
  return (
    <div className={s.content}>
      <img className={s.image} src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
