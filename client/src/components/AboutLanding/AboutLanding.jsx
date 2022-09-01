import React from "react";
import Title from "../Title/Title.jsx";
import s from "./AboutLanding.module.css";
import AboutLandingCard from "./AboutLandingCard/AboutLandingCard";

import img11 from "../../img/About/about-isea/1.avif";
import img22 from "../../img/About/about-isea/2.avif";
import img33 from "../../img/About/about-isea/3.avif";
import img44 from "../../img/About/about-isea/4.avif";

export default function AboutLanding() {
  const text1 =
    "With 168 Members, ISEA plays a leading role in the energy transformation as a centre of excellence for knowledge and innovation, a global voice for renewables, a network hub and a source of advice and support for countries.";
  const text2 =
    "As a part of its contribution to the Climate Investment Platform, ISEA invites financial institutions, development organisations and private investors prepared to support the realisation of projects and projects in need of support to register their interest.";
  const text3 =
    "With 168 Members, ISEA plays a leading role in the energy transformation as a centre of excellence for knowledge and innovation, a global voice for renewables, a network hub and a source of advice and support for countries.";
  const text4 =
    "As a part of its contribution to the Climate Investment Platform, ISEA invites financial institutions, development organisations and private investors prepared to support the realisation of projects and projects in need of support to register their interest.";
  return (
    <section className={s.container}>
      <Title className={s.title} name="About us" />
      <div className={s.content}>
        <AboutLandingCard image={img11} text={text1} />
        <AboutLandingCard image={img33} text={text2} />
        <AboutLandingCard image={img22} text={text3} />
        <AboutLandingCard image={img44} text={text4} />
      </div>
    </section>
  );
}
