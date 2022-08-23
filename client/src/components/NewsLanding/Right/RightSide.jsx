import React from "react";
import s from "../NewsLanding.module.css";

export default function RightSide({ title, image, date }) {
  return (
    <div className={s.grids}>
      <div className={s.contentLeft}>
        <div>
          <h2 className={s.titleLeft}>{title}</h2>
          <p className={s.date}>{date}</p>
        </div>
        <div>
          <img className={s.imageLeft} src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}
