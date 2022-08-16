import React from "react";
import Title from "../../../components/Title/Title";
import s from "./AboutContactPage.module.css";
import contact from "../../../img/hero-Slider/contact.jpg";
import Menu from "../../../components/Menu/Menu";

import city1 from "../../../img/hero-Slider/4.jpg";
import city2 from "../../../img/hero-Slider/6.jpg";
import city3 from "../../../img/hero-Slider/7.jpg";
import team from "../../../img/hero-Slider/team.jpg";

const AboutContactPage = () => {
  const arr = [
    "Coalition for Action",
    "Data Statistics",
    "Costs",
    "Develop a project (Project Navigator)",
    "Find investors/fund a project (Sustainable Energy Marketplace)",
    "Get funded (IRENA/ADFD Project Facility)",
    "Locate a project site (Global Atlas)",
    "Media Inquiries",
  ];

  return (
    <div className="container">
      <Title name={"Contact"} />
      <img src={contact} alt="contact" className={s.contact} />
      <div className={s.contactUs}>
        <div className={s.containerInfo}>
          <div className={s.leftContainer}>
            <div className={s.contactTitle}>
              <div className={s.contactTitleChild}>
                <img className={s.city} src={city1} alt="city1" />
                <h2>ISEA Headquarters</h2>
                <p>Masdar City</p>
                <p>P.O. Box 236, Abu Dhabi</p>
                <p>United Arab Emirates</p>
                <h4>+97124179000</h4>
                <h4>info@irena.org</h4>
              </div>
              <div className={s.contactTitleChild}>
                <img className={s.city} src={city2} alt="city2" />
                <h2>ISEA Innovation and Technology Centre</h2>
                <p>Willy-Brandt-Allee 20</p>
                <p>P.O. Box 236, Abu Dhabi</p>
                <p>United Arab Emirates</p>
                <h4>+49 228 391 79085</h4>
                <h4>info@irena.org</h4>
              </div>
              <div className={s.contactTitleChild}>
                <img className={s.city} src={city3} alt="city3" />
                <h2>
                  ISEA Office of the Permanent Observer to the United Nations
                </h2>
                <p>Uganda House</p>
                <p>P.O. Box 236, Abu Dhabi</p>
                <p>United Arab Emirates</p>
                <h4>+16467382014</h4>
                <h4>info@irena.org</h4>
              </div>
            </div>
            <hr className={s.hrr} />
            <div>
              <Title name={"Plan Your Visit"} />
              <div className={s.titleTeam}>
                <img src={team} alt="team" />
                <div>
                  <p>
                    A visit to the IRENA Abu Dhabi Headquarters is customised to
                    the visitors’ interests and needs, and can include hearing
                    from IRENA experts in various fields of renewable energy and
                    the global energy transition.
                  </p>
                  <p>Download and complete the Visit Request Form.</p>
                  <p>
                    E-mail the completed form to communications@irena.org to
                    arrange your visit and learn more about who we are and what
                    we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={s.RightContainer}>
            <Title name={"Contact"} />
            <Menu />
          </div>
        </div>
        <hr />
        <div className={s.otherContact}>
          <Title name={"Other contacts"} />
          <div className={s.otherContactInfo}>
            <div className={s.contactInfo1}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactPage;
