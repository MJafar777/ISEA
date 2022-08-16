import React from "react";
import s from "./date.module.css";

export default function Date({ date, lang, category }) {
  return (
    <div className={s.content}>
      <span>{date}</span>
      <span>|</span>
      <span>{category}</span>
      <span>|</span>
      <span>{lang}</span>
    </div>
  );
}
