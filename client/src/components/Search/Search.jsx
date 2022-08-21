import React from "react";
import s from "./search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search({ placeholder }) {
  return (
    <div className={s.background}>
      <input type="search" className={s.search} placeholder={placeholder} />
      <button className={s.button}>
        <AiOutlineSearch className={s.icon} />
      </button>
    </div>
  );
}
