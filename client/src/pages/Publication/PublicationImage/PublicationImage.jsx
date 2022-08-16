import React from "react";
import s from "./publicationImage.module.css";

export default function PublicationImage({ image }) {
  return (
    <div className={s.image}>
      <img src={image} />
    </div>
  );
}
