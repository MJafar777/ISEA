import React from "react";
import Title from "../Title/Title";
import Card from "./Card/Card";
import s from "./publicationLanding.module.css";
import image1 from "../../img/Publications/1.jpg";
import image2 from "../../img/Publications/2.jpg";
import image3 from "../../img/Publications/3.jpg";
import image4 from "../../img/Publications/4.jpg";

export default function PublicationLanding() {
  return (
    <div className={s.background}>
      <div className="container">
        <Title name="Recent Rublications" />
        <div className={s.container}>
          <Card image={image1} title={"Renewable Energy Statistics 2022"} />
          <Card image={image2} title={"Global Hydrogen Trade to Meet"} />
          <Card image={image3} title={"Scenarios for the Energy Transition"} />
          <Card image={image4} title={"Scenarios for the Energy Transition"} />
        </div>
      </div>
    </div>
  );
}
