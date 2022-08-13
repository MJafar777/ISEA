import React from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";
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
    </div>
  );
};

export default HomePage;
