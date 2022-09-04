import React from "react";
import Title from "../Title/Title";
import s from "./energySources.module.css";

import img1 from "../../img/energySources/wind.svg";
import img2 from "../../img/energySources/Bioenergy.svg";
import img3 from "../../img/energySources/volcano.svg";
import img4 from "../../img/energySources/hydopower.svg";
import img5 from "../../img/energySources/ocean.svg";
import img6 from "../../img/energySources/solar.svg";
import { NavLink } from "react-router-dom";

const EnergySources = () => {
  return (
    <div className={s.energyComponent}>
      <div className="container">
        <Title name={" Renewable Energy Sources"} />
        <div className={s.rowParent}>
          <NavLink className={s.row} to={"/wind"}>
            <div className={s.energys}>
              <img src={img1} alt="img1" />
              <p>Wind</p>
            </div>
          </NavLink>
          <NavLink className={s.row} to={"/bioenergy"}>
            <div className={s.energys}>
              <img src={img2} alt="img2" />
              <p>Bioenergy</p>
            </div>
          </NavLink>
          <NavLink className={s.row} to={"/geothermal"}>
            <div className={s.energys}>
              <img src={img3} alt="img3" />
              <p>Geothermal</p>
            </div>
          </NavLink>
          <NavLink className={s.row} to={"/hydopower"}>
            <div className={s.energys}>
              <img src={img4} alt="img4" />
              <p>Hydopower</p>
            </div>
          </NavLink>
          <NavLink className={s.row} to={"/ocean"}>
            <div className={s.energys}>
              <img src={img5} alt="img5" />
              <p>Ocean</p>
            </div>
          </NavLink>
          <NavLink className={s.row} to={"/solar"}>
            <div className={s.energys}>
              <img src={img6} alt="img6" />
              <p>Solar</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnergySources;
