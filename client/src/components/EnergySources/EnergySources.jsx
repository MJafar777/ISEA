import React from "react";
import Title from "../Title/Title";
import s from "./energySources.module.css";

import img1 from "../../img/energySources/wind-power.avif";
import img2 from "../../img/energySources/renewable.avif";
import img3 from "../../img/energySources/geothermal-energy.avif";
import img4 from "../../img/energySources/water.avif";
import img5 from "../../img/energySources/waves.avif";
import img6 from "../../img/energySources/solar-energy.avif";

const EnergySources = () => {
  return (
    <div className={s.energyComponent}>
      <div className="container">
        <Title name={" Renewable Energy Sources"} />
        <div className={s.rowParent}>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img1} alt="img1" />
              <p>Wind</p>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img2} alt="img2" />
              <p>Bioenergy</p>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img3} alt="img3" />
              <p>Geothermal</p>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img4} alt="img4" />
              <p>Hydopower</p>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img5} alt="img5" />
              <p>Ocean</p>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.energys}>
              <img src={img6} alt="img6" />
              <p>Solar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergySources;
