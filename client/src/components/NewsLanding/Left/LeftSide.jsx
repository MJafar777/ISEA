import React from "react";
import s from "../NewsLanding.module.css";

export default function LeftSide({ title, image, text }) {
  return (
    <div>
      {" "}
      <div className={s.left}>
        <h2 className={s.mainText}>
          <a href="#">{title}</a>
        </h2>
        <img src={image} className={s.mainImg} alt={title} />
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
