import React from "react";
import { NavLink } from "react-router-dom";
import s from "../NewsLanding.module.css";
import Moment from "react-moment";

export default function RightSide({ title, image, date, id }) {
  return (
    <div className={s.grids}>
      <div className={s.contentLeft}>
        <div>
          <NavLink to={"/news/" + id} className={s.titleLeft}>
            {title}
          </NavLink>
          <p className={s.date}>
            <Moment format="YYYY/MM/DD" date={date} />
          </p>
        </div>
        <div>
          <img className={s.imageLeft} src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}
