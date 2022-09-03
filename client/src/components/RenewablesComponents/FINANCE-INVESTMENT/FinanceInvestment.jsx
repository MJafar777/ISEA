import React from "react";
import Title from "../../Title/Title";
import s from "./FinanceInvestment.module.css";

import img1 from "../../../img/Renewables/finance-invest/img1.jpeg";
import img2 from "../../../img/Renewables/finance-invest/img2.jpg";

const FinanceInvestment = () => {
  return (
    <div className="container">
      <Title name={"Finance Investment"} />
      <div className={s.financeInvestment}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Getting the world on track for net zero emissions by 2050 requires
              clean energy transition-related investment to accelerate from
              current levels to around USD 4 trillion annually by 2030. The APS
              sees progress on this front, but the level of investment required
              in the NZE is three-quarters higher. This expansion is driven by a
              USD 1.1 trillion increase, relative to the APS, in annual
              investment in clean power generation and electricity
              infrastructure (two-thirds for generation and one-third for
              networks), a USD 0.5 trillion increase in investment in energy
              efficiency and end-use decarbonisation in the buildings, industry
              and transport sectors, as well as a rapid scaling up from a low
              base of low emissions fuels based on hydrogen or bioenergy.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              The large increase in capital investment in the NZE is partly
              compensated for by the lower operating expenditure that follow the
              shift away from upstream fuel supply and fossil fuel generation
              projects towards capital-intensive clean technologies. Keeping
              upfront financing costs low nevertheless is critical to the speed
              and affordability of this transformation. In recent years,
              economy-wide financing costs have tended to come down around the
              world. However, capital remains up to seven-times more expensive
              in emerging market and developing economies than in advanced
              economies, while fiscal expansions and inflationary pressures
              around the world increase the risk of growing debt burdens and
              higher borrowing costs in the future.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceInvestment;
