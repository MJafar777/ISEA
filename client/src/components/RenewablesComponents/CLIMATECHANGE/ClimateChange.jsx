import React from "react";

import Title from "../../Title/Title";

import s from "./ClimateChange.module.css";

import img1 from "../../../img/Renewables/climate-change/climatChange1.jpg";
import img2 from "../../../img/Renewables/climate-change/climateChane2.jpg";
import img3 from "../../../img/Renewables/climate-change/climateCHange3.jpg";

const ClimateChange = () => {
  return (
    <div className="container">
      <Title name={"Climate Change"} />
      <div className={s.climatChange}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img1" />
            <h3 className={s.text}>
              Contemporary climate change includes both global warming and its
              impacts on Earth's weather patterns. There have been previous
              periods of climate change, but the current changes are distinctly
              more rapid and not due to natural causes. Instead, they are caused
              by the emission of greenhouse gases, mostly carbon dioxide and
              methane. Burning fossil fuels for energy production creates most
              of these emissions. Certain agricultural practices, industrial
              processes, and forest loss are additional sources. Greenhouse
              gases are transparent to sunlight, allowing it through to heat the
              Earth's surface.
            </h3>
            <img className={s.right} src={img1} alt="img1" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img1" />
            <h3 className={s.text}>
              Due to climate change, deserts are expanding, while heat waves and
              wildfires are becoming more common.Increased warming in the Arctic
              has contributed to melting permafrost, glacial retreat and sea ice
              loss. Higher temperatures are also causing more intense storms,
              droughts, and other weather extremes. Rapid environmental change
              in mountains, coral reefs, and the Arctic is forcing many species
              to relocate or become extinct. Climate change threatens people
              with food and water scarcity, more disease, and economic loss.
              Human migration and conflict can be a result.
            </h3>
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img3} alt="img1" />
            <h3 className={s.text}>
              Many of these impacts are already felt at the current level of
              warming. Additional warming will increase these impacts and may
              trigger tipping points, such as the melting of the Greenland ice
              sheet. Under the 2015 Paris Agreement, nations collectively agreed
              to keep warming "well under. However, with pledges made under the
              Agreement, global warming would still reach about by the end of
              the century. Limiting warming to 1.5 °C will require halving
              emissions by 2030 and achieving net-zero emissions by 2050.
            </h3>
            <img className={s.right} src={img3} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
