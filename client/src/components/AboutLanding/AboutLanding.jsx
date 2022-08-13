import React from "react";
import Title from "../title/Title";
import s from "./AboutLanding.module.css";

export default function AboutLanding() {
  return (
    <div className={s.container}>
      <Title name="About us" />
    </div>
  );
}
