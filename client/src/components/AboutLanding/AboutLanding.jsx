import React from "react";
import Title from "../Title/Title.jsx";
import s from "./AboutLanding.module.css";
import AboutLandingCard from "./AboutLandingCard/AboutLandingCard";
import image1 from "../../img/hero-Slider/2.jpg";

import image2 from "../../img/hero-Slider/3.jpg";

export default function AboutLanding() {
  const text =
    "With 168 Members, IRENA plays a leading role in the energy transformation as a centre of excellence for knowledge and innovation, a global voice for renewables, a network hub and a source of advice and support for countries.";
  return (
    <section className={s.container}>
      <Title name="About us" />
      <div className={s.content}>
        <AboutLandingCard image={image1} text={text} />
        <AboutLandingCard image={image2} text={text} />
      </div>
    </section>
  );
}
