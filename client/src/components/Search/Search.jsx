import React from "react";
import s from "./search.module.css";

export default function Search({ placeholder }) {
  return (
    <div className={s.background}>
      <input type="search" className={s.search} placeholder={placeholder} />
      <button className={s.button}>
        <img src="" alt="" />
        12
      </button>
    </div>
  );
}
