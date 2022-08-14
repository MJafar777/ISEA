import React from "react";
import Title from "../../components/Title/Title";
import AboutMenu from "../../components/Menu/Menu";
import s from "./AboutPage.module.css";
import AboutContactPage from "./Contact/AboutContactPage";
import batary from "../../img/hero-Slider/aboutAdd.jpg";
import About from "./About/About";
import { Routes, Route } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container">
      <Title name={"About ISES"} />
      <img src={batary} alt="batary" className={s.batary} />
      <div className={s.containerInfo}>
        <About />
        <Routes>
          <Route path={"/about/contact"} element={<AboutContactPage />} />
        </Routes>
        <hr />
        <div className={s.RightContainer}>
          <AboutMenu />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
