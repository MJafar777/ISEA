import React from "react";
import Title from "../../components/Title/Title";
import s from "./AboutPage.module.css";
import about from "../../img/About/about-isea/top.avif";
import About from "./About/About";

const AboutPage = () => {
  return (
    <div className={s.AboutPage}>
      <div className={s.tops + " " + "container"}>
        <Title name={"About ISES"} />
        <img src={about} alt="batary" className={s.batary} />
        <div className={s.containerInfo}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
