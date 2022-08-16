import React from "react";
import s from "./profile.module.css";

export default function Profile({ name, image }) {
  return (
    <>
      <img className={s.image} />
      <h3>Pulatov Niyozbek</h3>
    </>
  );
}
