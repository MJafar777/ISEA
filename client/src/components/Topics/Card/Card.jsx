import React from "react";
import s from "../topics.module.css";

export default function Card({ image, name }) {
  return (
    <div className={s.content}>
      <img className={s.image} src={image} alt={name} />
      <h3 className={s.title}>{name}</h3>
    </div>
  );
}
