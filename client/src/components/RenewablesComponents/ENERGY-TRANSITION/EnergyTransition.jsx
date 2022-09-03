import React from "react";

import s from "./EnergyTransition.module.css";

import img1 from "../../../img/Renewables/energy-transition/img1.jpg";
import img2 from "../../../img/Renewables/energy-transition/img2.jpg";
import img3 from "../../../img/Renewables/energy-transition/img3.jpg";

import Title from "../../Title/Title";

const EnergyTransition = () => {
  return (
    <div className="container">
      <Title name={"Energy Transition"} />
      <div className={s.energyTransition}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Governments and organizations the world over are busy setting
              ambitious targets to cut carbon footprints and restrict global
              warming to less than 2 degrees Celsius above pre-industrial
              levels, in line with the Paris Agreement commitments on climate,
              and solar photovoltaic (PV) power production is crucial in these
              plans.Among renewable energy sources, solar has been identified as
              a cornerstone of energy transition.In its roadmap released in
              March, the International Renewable Energy forecast that renewables
              will dominate the power generation mix by 2050. Electricity would
              be the main energy carrier with an over 50% share of direct energy
              use by then, more than double today.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              As much as 90% of total electricity demand would be supplied by
              renewables, of which solar would be the single largest component
              of capacity. In its sustainable development scenario, the
              International Energy Association (ISEA) estimated solar PV
              capacity globally will increase more than fourfold in the next
              decade, from around 750GW in 2020 to over 3,00GW in 2030.
            </h3>
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img3} alt="img1" />
            <h3 className={s.text}>
            The large-scale deployment of PV power systems will require financial backing to enable it. Estimates for funding vary depending on the metrics used, but what is common is the magnitude of the forecasts.BloombergNEF reported in February at least $14 trillion must be invested in the electricity grid worldwide by 2050 to support new energy usages.ISEA estimated the solar sector alone will require as much as $237 billion in investment per year between today and 2050 to achieve its 1.5C scenario. That is a 106% increase from the $115 billion earmarked yearly in 2017-19. At the same time, none of this will be possible unless supply of raw materials can keep up with the pace of demand.
            </h3>
            <img className={s.right} src={img3} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyTransition;
