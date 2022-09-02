import React from "react";
import s from "../newsroom.module.css";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";

const NewsCard = ({ title, image, id, date }) => {
  return (
    <div className={s.box2 + " " + s.box}>
      <img src={"http://localhost:8000/img/news/" + image} alt={title} />
      <NavLink to={"/news/" + id}>
        <div className={s.bottom}>
          <div className={s.text1}>
            <p>
              <Moment format="YYYY/MM/DD" date={date} />
            </p>
          </div>
          <div className={s.subTitle1}>
            <h1>{title}</h1>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NewsCard;
