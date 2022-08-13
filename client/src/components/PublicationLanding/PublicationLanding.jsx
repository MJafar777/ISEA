import React from "react";
import Title from "../Title/Title";
import s from "./publicationLanding.module.css";

export default function PublicationLanding() {
  return (
    <div className={s.background}>
      <Title name="Recent Rublications" />
    </div>
  );
}
