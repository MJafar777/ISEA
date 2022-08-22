import React from "react";
import s from "../NewsLanding.module.css";

export default function LeftSide({ title, image, text, date }) {
  return (
    <div>
      {" "}
      <div className={s.left}>
        <h2 className={s.mainText}>
          <a href="#">{title}</a>
        </h2>
        <p className={s.bigdate}>{date}</p>
        <img src={image} className={s.mainImg} alt={title} />
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
}
