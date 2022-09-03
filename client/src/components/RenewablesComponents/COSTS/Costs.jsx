import React from "react";
import Title from "../../Title/Title";
import s from "./cost.module.css";

import img1 from "../../../img/Renewables/costs/img1.jpg";
import img2 from "../../../img/Renewables/costs/img2.jpg";
import img3 from "../../../img/Renewables/costs/img3.jpg";
import img4 from "../../../img/Renewables/costs/img4.jpg";

const Costs = () => {
  return (
    <div className="container">
      <Title name={"Costs"} />
      <div className={s.costs}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Renewable energy has entered a virtuous cycle of falling costs,
              increasing deployment and accelerated technological progress.
              Solar PV module prices have fallen by around 90% since the end of
              2009, while wind turbine prices have fallen by 55-60% since 2010.
              The public debate around renewable energy, however, continues to
              suffer from outdated perception that renewable energy is not
              competitive, forming a significant and unnecessary barrier to its
              deployment.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              ISEA's cost analysis programme is designed to improve publicly
              available analysis and data on costs to allow policy makers and
              investors to make robust decisions about the role of renewables.
              The ISEA Renewable Cost Database contains around 18 000
              utility-scale renewable power generation projects and 11 000 PPA
              and tender results that provide new insights into trends in the
              costs and performance of renewables.
            </h3>
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img3} alt="img1" />
            <h3 className={s.text}>
              The ISEA Renewable Costing Alliance (an alliance of companies,
              industry associations, governments and researchers) is helping to
              expand the database by sharing confidentially, their data for
              real-world renewable energy projects.
            </h3>
            <img className={s.right} src={img3} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img4} alt="img1" />
            <h3 className={s.text}>
              This study shows that battery electricity storage systems offer
              enormous deployment and cost-reduction potential. By 2030, total
              installed costs could fall between 50% and 60% (and battery cell
              costs by even more), driven by optimisation of manufacturing
              facilities, combined with better combinations and reduced use of
              materials.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costs;
