import React from "react";
import { NavLink } from "react-router-dom";
import s from "../NewsLanding.module.css";
import Moment from "react-moment";

export default function LeftSide({ title, image, text, date, id }) {
  return (
    <div>
      {" "}
      <div className={s.left}>
        <NavLink to={"/news/" + id}>
          <img src={image} className={s.mainImg} alt={title} />
          <h1 className={s.mainText}>{title}</h1>
          <p className={s.text}>{text}</p>
          <p className={s.bigdate}>
            <Moment format="YYYY/MM/DD" date={date} />
          </p>
        </NavLink>
      </div>
    </div>
  );
}
