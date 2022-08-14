import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import OurWork from "./pages/OurWork/OurWork";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/renewables" element={<HomePage />} />
        <Route path="/newroom" element={<HomePage />} />
        <Route path="/publications" element={<HomePage />} />
        <Route path="/education" element={<HomePage />} />
        <Route path="/data" element={<HomePage />} />
        <Route path="/events" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
