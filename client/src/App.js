import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import OurWork from "./pages/OurWork/OurWork";
import AboutContactPage from "./pages/AboutPage/Contact/AboutContactPage";
import Newsroom from "./pages/Newsroom/Newsroom";
import Publication from "./pages/Publication/Publication";
import Education from "./pages/Education/Education";
import Engineering from "./pages/Engineering/Engineering";
import Project from "./pages/Project/Project";
import Renewables from "./pages/Renewables/Renewables";
import "./pages/Renewables/renewables.module.css";
import PublicationBook from "./pages/Publication/PublicationBook/PublicationBook";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* about page child comonents started */}
        <Route path="/contact" element={<AboutContactPage />} />
        {/* about page child comonents finished */}
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/renewables" element={<HomePage />} />
        <Route path="/newroom" element={<Newsroom />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/education" element={<Education />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/project" element={<Project />} />
        <Route path="/renewables" element={<Renewables />} />
        <Route path="/publications/:id" element={<PublicationBook />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
