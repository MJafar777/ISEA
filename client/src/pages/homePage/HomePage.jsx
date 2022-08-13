import React from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
import EnergySources from "../../components/EnergySources/EnergySources";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NewsLanding from "../../components/NewsLanding/NewsLanding";

const HomePage = () => {
  return (
    <div>
      <IntroLanding />
      <AboutLanding />
      <NewsLanding />
      <EnergySources />
    </div>
  );
};

export default HomePage;
