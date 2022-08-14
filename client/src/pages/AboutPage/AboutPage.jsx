import React from "react";
import Title from "../../components/Title/Title";
import AboutMenu from "../../components/Menu/Menu";
import s from "./AboutPage.module.css";

import batary from "../../img/hero-Slider/aboutAdd.jpg";

const AboutPage = () => {
  return (
    <div className="container">
      <Title name={"About ISES"} />
      <img src={batary} alt="batary" className={s.batary} />
      <div className={s.containerInfo}>
        <div className={s.leftContainer}>
          <p>
            The International Renewable Energy Agency (IRENA) is an
            intergovernmental organisation that supports countries in their
            transition to a sustainable energy future, and serves as the
            principal platform for international cooperation, a centre of
            excellence, and a repository of policy, technology, resource and
            financial knowledge on renewable energy. IRENA promotes the
            widespread adoption and sustainable use of all forms of renewable
            energy, including bioenergy, geothermal, hydropower, ocean, solar
            and wind energy in the pursuit of sustainable development, energy
            access, energy security and low-carbon economic growth and
            prosperity.
          </p>
          <p>
            With a mandate from countries around the world, IRENA encourages
            governments to adopt enabling policies for renewable energy
            investments, provides practical tools and policy advice to
            accelerate renewable energy deployment, and facilitates knowledge
            sharing and technology transfer to provide clean, sustainable energy
            for the world’s growing population.
          </p>
          <p>
            In line with these aims, IRENA provides a wide range of products and
            services, including:
          </p>

          <ul style={{ listStyleType: "circle" }}>
            <li>
              Annual reviews of renewable energy <span>employment</span>;
            </li>
            <li>
              Renewable energy <span>capacity statistics</span>;
            </li>
            <li>
              Renewable energy <span>cost studies</span>;
            </li>
            <li>
              <span>Renewables Readiness Assessments</span> , conducted in
              partnership with governments and regional organisations, to help
              boost renewable energy development on a country by country basis;
            </li>
            <li>
              The <span>Global</span> Atlas, which maps resource potential by
              source and by location;
            </li>
            <li>
              Renewable energy <span>benefits studies</span>;
            </li>
            <li>
              <span>REmap</span>, a roadmap to double renewable energy use
              worldwide by 2030;
            </li>
            <li>Renewable energy technology briefs;</li>
            <li>Facilitation of regional renewable energy planning;</li>
            <li>
              Renewable energy project development tools like the Project
              Navigator, the Sustainable Energy Marketplace and the IRENA/ADFD
              Project Facility.
            </li>
          </ul>
          <p>
            With more than 180 countries actively engaged, IRENA promotes
            renewable resources and technologies as the key to a sustainable
            future and helps countries achieve their renewable energy potential.
          </p>
        </div>
        <hr />
        <div className={s.RightContainer}>
          <AboutMenu />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
