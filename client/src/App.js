import React, { useEffect } from "react";
import Header from "./components/Header/Header";
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
import Login from "./pages/Login/Login";
import Shablon2 from "./components/EngineeringComponents/Shablon2/Shablon2";
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
import Header1 from "./components/Header1/Header1";
import { checkMe } from "./store/authSlice";
import OneLidership from "./pages/IseaLiderShip/OneLidership/OneLidership";

// ---- Lidership page niki teymela
import img1 from "./img/ISEA_Lidership/jafar.avif";
import img2 from "./img/ISEA_Lidership/niyozbek.avif";
import img3 from "./img/ISEA_Lidership/mamur.avif";

const obj = [
  {
    id: 1,
    name: "Jafar Mirzaraximov",
    status: "Team Leader",
    about: "Jafar",
    img: img1,
  },
  {
    id: 2,
    name: "Niyozbek Polatov",
    status: "Full-Stack Developer",
    about: "Niyozbek",
    img: img2,
  },
  {
    id: 3,
    name: "Mamurjon Ibragimov",
    status: "Full-Stack Developer",
    about: "Mamurjon",
    img: img3,
  },
];

// ---- Lidership page niki teymela

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkMe());
  }, []);
  return (
    <>
      {/* <div className="testing">
        <Marquee speed="100" className="testSite">
          <span>Sayt test rejimida</span> {"  "}{" "}
          <span>The site is in test mode</span>{" "}
          <span>Сайт находится в тестовом режиме</span>
          <span>Sayt test rejimida !</span> {"  "}{" "}
          <span>The site is in test mode !</span>{" "}
          <span>Сайт находится в тестовом режиме !</span>
        </Marquee>
      </div> */}

      {/* <Header /> */}
      <Header1 />

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

          {/* ---------------------------- */}

          <Route path="/news" element={<Newsroom />} />
          <Route path="news/:id" element={<OneNews />} />

          {/* ---------------------------- */}

          <Route path="/publications" element={<Publication />} />

          {/* ---------------------------- */}
          <Route path="/Announcement" element={<Announcement />} />

          {/* ---------------------------- */}

          <Route path="/education" element={<Education />} />

          {/* ---------------------------- */}

          <Route path="/engineering" element={<Engineering />} />

          {/* engineering page child comonents started */}
          <Route path="/shablon2" element={<Shablon2 />} />
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
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
