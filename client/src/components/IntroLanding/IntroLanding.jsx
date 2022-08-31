import React from "react";

import s from "./introLanding.module.css";

// import img1 from "../../img/MainNew/EuroSun.jpg";
import img1 from "../../img/introLanding/1.jpg";
// import img2 from "../../img/MainNew/InCore.jpg";
import img2 from "../../img/introLanding/2.jpg";
// import img3 from "../../img/MainNew/photovoltaic.jpg";
import img3 from "../../img/introLanding/3.jpg";
// import img4 from "../../img/MainNew/SWC_YearOf.jpg";
import img4 from "../../img/introLanding/4.jpg";

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
        <p>
          ISES Solar Energy Museum + SWC 50 Celebratory Booklet Education on
          Renewable Energies
        </p>
      </div>
      <div className={s.cardLevel}>
        <img src={img3} alt="img3" />
        <p>
          EuroSun 2022 Education on Renewable Energies Education on Renewable
          Energies
        </p>
      </div>
      <div className={s.cardLevel}>
        <img src={img4} alt="img4" />
        <p>
          Webinars ISES Solar Energy Museum + SWC 50 Celebratory Booklet
          Education on Renewable Energies
        </p>
      </div>
    </div>
  );
};

export default IntroLanding;
