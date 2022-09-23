import React from "react";
import { NavLink } from "react-router-dom";
import s from "../NewsLanding.module.css";
import Moment from "react-moment";

export default function RightSide({ title, image, date, id }) {
  return (
    <div>
      <NavLink to={"/news/" + id}>
        <div className={s.contentLeft}>
          <div>
            <h1 className={s.title}>{title}</h1>
            <p className={s.date}>
              <Moment format="YYYY/MM/DD" date={date} />
            </p>
          </div>
          <div>
            <img className={s.imageLeft} src={image} alt={title} />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
