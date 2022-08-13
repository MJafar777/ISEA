import React from "react";

export default function Card({ image, name }) {
  return (
    <div className={s.content}>
      <img src={image} alt={name} />
      <h3 className={s.title}>{name}</h3>
    </div>
  );
}
