import React from "react";
import AboutLanding from "../../components/AboutLanding/AboutLanding";

import IntroLanding from "../../components/IntroLanding/IntroLanding";

import NewsLanding from "../../components/NewsLanding/NewsLanding";

const HomePage = () => {
  return (
    <div>
      <IntroLanding />
      <AboutLanding />
      <NewsLanding />
    </div>
  );
};

export default HomePage;
