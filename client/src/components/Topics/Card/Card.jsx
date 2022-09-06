import React from "react";
import { NavLink } from "react-router-dom";
import s from "../topics.module.css";
export default function Card({ image, name, link }) {
  return (
    <NavLink to={link} className={s.content}>
      <img className={s.image} src={image} alt={name} />
      <h3 className={s.title}>{name}</h3>
    </NavLink>
  );
}
