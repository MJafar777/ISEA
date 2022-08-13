import React from "react";
import Title from "../title/Title";
import s from "./AboutLanding.module.css";
import AboutLandingCard from "./AboutLandingCard/AboutLandingCard";
import image1 from "../../img/hero-Slider/2.jpg";
import image2 from "../../img/hero-Slider/3.jpg";

export default function AboutLanding() {
  return (
    <div className={s.container}>
      <Title name="About us" />
      <div className={s.content}>
        <AboutLandingCard image={image1} text="111" />
        <AboutLandingCard image={image2} text="111" />
      </div>
    </div>
  );
}
