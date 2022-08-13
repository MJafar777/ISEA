import React from "react";
import s from "./title.module.css";

export default function Title({ name }) {
  return (
    <div>
      <h1 className={s.title}>{name}</h1>
    </div>
  );
}
