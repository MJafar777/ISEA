import React from "react";
import Title from "../../Title/Title";
import s from "./heatingColling.module.css";

import img1 from "../../../img/Renewables/heating-coling/img1.jpg";

const HeatingColing = () => {
  return (
    <div className="container">
      <Title name={"Finance Investment"} />
      <div className={s.heatingcoling}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Heating and cooling includes a wide range of end-use applications
              and technologies. In the buildings sector, it includes cooking,
              water heating, ambient heating, ambient cooling and refrigeration.
              In industry, besides ambient heating and cooling, it also includes
              process heating — from low temperature applications (e.g. in the
              food industry) to high temperature applications (e.g. in the
              cement, iron and steel industries). Heating and cooling for
              residential, commercial and industrial purposes accounts for a
              large share of total final energy demand. For example, in the EU,
              heating and cooling in buildings and industry accounts for half of
              energy consumption (figure estimated by the European Commission)
              Currently, demand for heating in buildings and industry outweighs
              demand for cooling. However, the latter is gradually catching up,
              especially due to increasing demand for air conditioning or
              refrigeration of food and medical supplies
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatingColing;
