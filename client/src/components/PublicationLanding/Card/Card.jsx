import React from "react";
import s from "../publicationLanding.module.css";

import { NavLink } from "react-router-dom";
export default function Card({ image, title, id }) {
  return (
    <NavLink to={"/publications/" + id}>
      <div className={s.content}>
        <img className={s.image} src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}
