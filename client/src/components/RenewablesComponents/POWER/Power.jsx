import React from "react";
import Title from "../../Title/Title";

import s from "./Power.module.css";

import img1 from "../../../img/Renewables/power/img1.jpg";
import img2 from "../../../img/Renewables/power/img2.jpg";

const Power = () => {
  return (
    <div className="container">
      <Title name={"Power"} />
      <div className={s.power}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              In the ongoing energy transition, the power sector has seen the
              most significant acceleration in renewable energy deployment.
              Although great progress has been achieved over the past decade,
              renewable energy deployment in the power sector is expected to
              continue apace, leading the transformation of the global energy
              system. Solar and wind have seen aggressive cost decreases, which
              launched a virtuous cycle of: deployment; learning effects leading
              to cost-reduction; and further acceleration of deployment due to
              increased competitiveness. During the last decade, fossil fuel
              prices have been characterised by extreme volatility. However,
              this has not slowed renewable energy deployment in the power
              system, regardless of competitiveness being higher in certain
              years than others.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              Increased efforts are necessary to scale-up renewable energy
              deployment outside the power sector. The electrification of
              end-use sectors is gaining momentum, leveraging accelerated
              renewable energy deployment in the power sector. Electric vehicles
              are a prominent area of interest and significant potential remains
              to be exploited in the electrification of heating and industrial
              processes, as well as the production of fuels (e.g. hydrogen) from
              renewable electricity.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
