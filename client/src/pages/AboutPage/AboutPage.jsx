import React from "react";
import Title from "../../components/Title/Title";
import s from "./AboutPage.module.css";
import About from "./About/About";
import Iframe from "react-iframe";
const AboutPage = () => {
  return (
    <div className={s.AboutPage}>
      <div className={s.tops + " " + "container"}>
        <Title name={"About ISES"} />
        <Iframe
          className={s.videos}
          src="https://www.youtube.com/embed/K_m2XPQ7VLc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <div className={s.containerInfo}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
