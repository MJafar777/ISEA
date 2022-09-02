import React from "react";
import s from "../newsroom.module.css";
import { NavLink } from "react-router-dom";

const NewsCard = ({ title, image, id }) => {
  return (
    <div className={s.box2 + " " + s.box}>
      <img src={"http://localhost:8000/img/news/" + image} alt={title} />
      <NavLink to={"/news/" + id}>
        <div className={s.bottom}>
          <div className={s.text1}>
            <p>22:10 18.05.2022</p>
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
