import React from "react";
import Title from "../Title/Title";
import s from "./topics.module.css";

export default function Topic() {
  return (
    <div className={s.background}>
      <Title name={"Topics"} />
      <div></div>
    </div>
  );
}
