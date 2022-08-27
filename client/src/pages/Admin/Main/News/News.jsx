import React from "react";
import s from "./news.module.css";

export default function News() {
  const clickHandler = () => {};
  return (
    <div>
      <div className={s.header}>
        <h2 className={s.title}>NEWS</h2>
        <div onClick={clickHandler} className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
    </div>
  );
}
