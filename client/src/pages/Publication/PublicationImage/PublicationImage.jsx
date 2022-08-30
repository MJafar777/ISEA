import React from "react";
import s from "./publicationImage.module.css";

export default function PublicationImage({ image, alt }) {
  return (
    <div className={s.image}>
      <img src={image} alt={alt} />
    </div>
  );
}
