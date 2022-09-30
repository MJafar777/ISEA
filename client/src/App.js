import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
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
import "./pages/Renewables/renewables.module.css";
import PublicationBook from "./pages/Publication/PublicationBook/PublicationBook";
import Register from "./pages/Register/Register";
import Signup from "./pages/Signup/Signup";
import ClimateChange from "./components/RenewablesComponents/CLIMATECHANGE/ClimateChange";
import EnergyTransition from "./components/RenewablesComponents/ENERGY-TRANSITION/EnergyTransition";
import FinanceInvestment from "./components/RenewablesComponents/FINANCE-INVESTMENT/FinanceInvestment";
import InnovationTechnology from "./components/RenewablesComponents/INNOVATION-TECHNOLOGY/InnovationTechnology";
import InductryTransport from "./components/RenewablesComponents/INDUCTRY-TRANSPORT/InductryTransport";
import Costs from "./components/RenewablesComponents/COSTS/Costs";
import Power from "./components/RenewablesComponents/POWER/Power";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Benefits from "./components/RenewablesComponents/Benefits/Benefits";
import MyProjects from "./pages/MyProjects/MyProjects";
import OneProject from "./pages/OneProject/OneProject";
import History from "./pages/AboutPage/History/History";
import InstitutionalStructure from "./pages/AboutPage/InstitutionalStructure/InstitutionalStructure";
import IseaMembership from "./pages/AboutPage/IseaMembership/IseaMembership";
import OfficialDocuments from "./pages/AboutPage/OfficialDocuments/OfficialDocuments";
import { useDispatch } from "react-redux";
import Announcement from "./pages/Announcement/Announcement";
import OneNews from "./pages/Newsroom/OneNew/OneNews";
import IseaLiderShip from "./pages/IseaLiderShip/IseaLiderShip";
import Header from "./components/Header/Header";
import { checkMe } from "./store/authSlice";
import OneLidership from "./pages/IseaLiderShip/OneLidership/OneLidership";
import Pagination from "./pages/Pagination/Pagination";

import HeatingColing from "./components/RenewablesComponents/HeatingColing/HeatingColing";
import Wind from "./pages/EnergySources/Wind/Wind";
import Bioenergy from "./pages/EnergySources/Bioenergy/Bioenergy";
import Geothermal from "./pages/EnergySources/Geothermal/Geothermal";
import Hydopower from "./pages/EnergySources/Hydopower/Hydopower";
import Ocean from "./pages/EnergySources/Ocean/Ocean";
import Solar from "./pages/EnergySources/Solar/Solar";
import obj from "./dataLidership";
import PublicationPage from "./pages/Publication2/PublicationPage";
import Error from "./components/Error/Error";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkMe());
  }, []);

  return (
    <>
      {/* <div className="testing">
        <Marquee speed="100" className="testSite">
          <span>Sayt test rejimida</span> {"  "} <span>The site is in test mode</span>{" "}
          <span>Сайт находится в тестовом режиме</span>
        </Marquee>
      </div> */}

      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* ---------------------------- */}

          <Route path="/about" element={<AboutPage />} />

          {/* about page child comonents started */}
          <Route path="/isea-leadership" element={<IseaLiderShip />} />
          <Route
            path="/isea-leadership/:id"
            element={<OneLidership obj={obj} />}
          />
          <Route path="/contact" element={<AboutContactPage />} />
          <Route path="/history" element={<History />} />
          <Route
            path="/institutional-structure"
            element={<InstitutionalStructure />}
          />
          <Route path="/isea-membership" element={<IseaMembership />} />

          <Route path="/official-documents" element={<OfficialDocuments />} />

          {/* about page child comonents finished */}

          {/* ---------------------------- */}

          <Route path="/ourwork" element={<OurWork />} />

          {/* ---------------------------- */}

          {/* <Route path="/renewables" element={<Renewables />} /> */}

          {/* renewables page child comonents started  */}
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/climate-change" element={<ClimateChange />} />
          <Route path="/energy-transition" element={<EnergyTransition />} />
          <Route
            path="/finance-and-investment"
            element={<FinanceInvestment />}
          />
          <Route path="/heating-cooling" element={<HeatingColing />} />
          <Route
            path="/innovation-technology"
            element={<InnovationTechnology />}
          />
          <Route path="/inductry-transport" element={<InductryTransport />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/power" element={<Power />} />
          <Route path="/pagination" element={<Pagination />} />
          {/* renewables page child comonents finished  */}

          {/* ---------------------------- */}

          <Route path="/news" element={<Newsroom />} />
          <Route path="news/:id" element={<OneNews />} />

          {/* ---------------------------- */}

          {/* <Route path="/publications" element={<Publication />} /> */}
          <Route path="/publications" element={<PublicationPage />} />

          {/* ---------------------------- */}
          <Route path="/Announcement" element={<Announcement />} />

          {/* ---------------------------- */}

          <Route path="/education" element={<Education />} />

          {/* ---------------------------- */}

          <Route path="/engineering" element={<Engineering />} />

          {/* engineering page child comonents started */}
          {/* engineering page child comonents finished */}

          {/* ---------------------------- */}

          <Route path="/project" element={<Project />} />

          {/* ---------------------------- */}
          {/* <Route path="/renewables" element={<Renewables />} /> */}

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
          <Route path="/project/:id" element={<OneProject />} />
          <Route path="/project" element={<Project />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/me"} element={<Admin />} />
          <Route path={"/myProjects"} element={<MyProjects />} />

          {/* energy sources childrens */}
          <Route path={"/wind"} element={<Wind />} />
          <Route path={"/bioenergy"} element={<Bioenergy />} />
          <Route path={"/geothermal"} element={<Geothermal />} />
          <Route path={"/hydopower"} element={<Hydopower />} />
          <Route path={"/ocean"} element={<Ocean />} />
          <Route path={"/solar"} element={<Solar />} />
          <Route path={"*"} element={<Error />} />

          {/* energy sources childrens */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
