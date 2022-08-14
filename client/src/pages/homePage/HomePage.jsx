import React from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
import EnergySources from "../../components/EnergySources/EnergySources";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NewsLanding from "../../components/NewsLanding/NewsLanding";
import PublicationLanding from "../../components/PublicationLanding/PublicationLanding";
import Topic from "../../components/Topics/Topic";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <HeroSlider />
        <IntroLanding />
        <AboutLanding />
        <NewsLanding />
      </div>
      <PublicationLanding />
      <div className="container">
        <Topic />
      </div>
      <EnergySources />
    </main>
  );
};

export default HomePage;
