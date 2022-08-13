import React from "react";

import s from "./introLanding.module.css";

import img1 from "../../img/MainNew/EuroSun.jpg";
import img2 from "../../img/MainNew/InCore.jpg";
import img3 from "../../img/MainNew/photovoltaic.jpg";
import img4 from "../../img/MainNew/SWC_YearOf.jpg";

const IntroLanding = () => {
  return (
    <div className={s.cards}>
      <div className={s.cardLevel}>
        <img src={img1} alt="img1" />
        <p>
          InCoRE - International Cooperation in Higher Education on Renewable
          Energies
        </p>
      </div>
      <div className={s.cardLevel}>
        <img src={img2} alt="img2" />
        <p>ISES Solar Energy Museum + SWC 50 Celebratory Booklet</p>
      </div>
      <div className={s.cardLevel}>
        <img src={img3} alt="img3" />
        <p>EuroSun 2022 Education on Renewable Energies</p>
      </div>
      <div className={s.cardLevel}>
        <img src={img4} alt="img4" />
        <p>Webinars ISES Solar Energy Museum + SWC 50 Celebratory Booklet</p>
      </div>
    </div>
  );
};

export default IntroLanding;
