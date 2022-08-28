import React from "react";
import s from "./Shablon.module.css";
import a from "../Renewables.module.css";

const Shablon = ({ imgUrl, title = "", content = "" }) => {
  return (
    <div className="container">
      <div className={s.cardInfo}>
        <div className={s.info}>
          <img className={s.images} src={imgUrl} alt="imgUrl" />
          <div className={a.content}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shablon;
