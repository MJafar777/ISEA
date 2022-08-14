import React from "react";
import Title from "../Title/Title";
import s from "./topics.module.css";
import Card from "./Card/Card";
import image1 from "../../img/iconTopics/1,1.png";
export default function Topic() {
  return (
    <div className={s.background}>
      <Title name={"Topics"} />
      <div className={s.grid}>
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
        <Card name={"Benefits"} image={image1} />
      </div>
    </div>
  );
}
