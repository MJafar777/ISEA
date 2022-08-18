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
// import Slider from "./components/Slider/Slider";
// import Benefits from "./components/RenewablesComponents/ShablonRenewables/Shablon";
import Register from "./pages/Register/Register";
import Signup from "./pages/Signup/Signup";
import Benefitsheating from "./components/RenewablesComponents/BENEFITSHEATING-COOLING/Benefitsheating";
import ClimateChange from "./components/RenewablesComponents/CLIMATECHANGE/ClimateChange";
import EnergyTransition from "./components/RenewablesComponents/ENERGY-TRANSITION/EnergyTransition";
import FinanceInvestment from "./components/RenewablesComponents/FINANCE-INVESTMENT/FinanceInvestment";
import InnovationTechnology from "./components/RenewablesComponents/INNOVATION-TECHNOLOGY/InnovationTechnology";
import OffGridFor from "./components/RenewablesComponents/OFF-GRID-FOR/OffGridFor";
import Policy from "./components/RenewablesComponents/POLICY/Policy";
import InductryTransport from "./components/RenewablesComponents/INDUCTRY-TRANSPORT/InductryTransport";
import Costs from "./components/RenewablesComponents/COSTS/Costs";
import Island from "./components/RenewablesComponents/ISLANDS/Island";
import Power from "./components/RenewablesComponents/POWER/Power";
import Admin from "./pages/Admin/Admin";
// import Benefits from "./components/RenewablesComponents/Benefits/Benefits";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* about page child comonents started */}
          <Route path="/contact" element={<AboutContactPage />} />
          {/* about page child comonents finished */}
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/renewables" element={<Renewables />} />
          {/* renewables page child comonents started  */}
          {/* <Route path="/benefits" element={<Benefits />} /> */}
          <Route path="/climate-change" element={<ClimateChange />} />
          <Route path="/energy-transition" element={<EnergyTransition />} />
          <Route
            path="/finance-and-investment"
            element={<FinanceInvestment />}
          />
          <Route
            path="/benefitsheating-and-cooling"
            element={<Benefitsheating />}
          />
          <Route
            path="/innovation-technology"
            element={<InnovationTechnology />}
          />
          <Route path="/off-grid" element={<OffGridFor />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/inductry-transport" element={<InductryTransport />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/islands" element={<Island />} />
          <Route path="/power" element={<Power />} />
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
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/admin"} element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
