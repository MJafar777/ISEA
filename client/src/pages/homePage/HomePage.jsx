import React from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
import EnergySources from "../../components/EnergySources/EnergySources";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NewsLanding from "../../components/NewsLanding/NewsLanding";
import PublicationLanding from "../../components/PublicationLanding/PublicationLanding";

const HomePage = () => {
  return (
    <div>
      <IntroLanding />
      <AboutLanding />
      <NewsLanding />
      <PublicationLanding />
      <EnergySources />
    </div>
  );
};

export default HomePage;
