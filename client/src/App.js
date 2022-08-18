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
import Slider from "./components/Slider/Slider";
<<<<<<< HEAD
import Benefits from "./components/RenewablesComponents/BENEFITS/Benefits";
=======
import Register from "./pages/Register/Register";
>>>>>>> 2990388bef4f794d07175fa12ccf7044e4138930

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
        <Route path="/renewables" element={<Renewables />} />
        {/* renewables page child comonents started  */}
        <Route path="/benefits" element={<Benefits />} />

        {/* renewables page child comonents finished  */}
        <Route path="/newroom" element={<Newsroom />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/education" element={<Education />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/project" element={<Project />} />
        <Route path="/renewables" element={<Renewables />} />
        <Route
          path="/publications/:id"
          element={
            <PublicationBook
              name={"Renewable Energy Statistics 2022"}
              date={"July 2022"}
              isbn={"978-92-9260-446-2"}
            />
          }
        />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
