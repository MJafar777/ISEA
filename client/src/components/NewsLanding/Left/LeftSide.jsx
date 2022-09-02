import React from "react";
import { NavLink } from "react-router-dom";
import s from "../NewsLanding.module.css";
import Moment from "react-moment";

export default function LeftSide({ title, image, text, date, id }) {
  return (
    <div>
      {" "}
      <div className={s.left}>
        <h2 className={s.mainText}>
          <NavLink to={"/news/" + id}>{title}</NavLink>
        </h2>
        <p className={s.bigdate}>
          <Moment format="YYYY/MM/DD" date={date} />
        </p>
        <img src={image} className={s.mainImg} alt={title} />
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
}
