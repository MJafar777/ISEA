import React from "react";
import s from "../NewsLanding.module.css";

export default function RightSide({ title }) {
  return (
    <>
      <div className={s.right}>
        <h2>{title}</h2>
      </div>
    </>
  );
}
