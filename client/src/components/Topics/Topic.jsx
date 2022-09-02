import React from "react";
import Title from "../Title/Title";
import s from "./topics.module.css";
import Card from "./Card/Card";

import image1 from "../../img/topicsIcon/./icons/benefits-icon.svg";
import image2 from "../../img/topicsIcon/./icons/climate-icon.svg";
import image3 from "../../img/topicsIcon/./icons/reload-sync-icon.svg";
import image4 from "../../img/topicsIcon/./icons/finance-icon.svg";
import image5 from "../../img/topicsIcon/./icons/low-temperature-icon.svg";
import image6 from "../../img/topicsIcon/./icons/ideas-icon.svg";
import image7 from "../../img/topicsIcon/./icons/income-growth-icon.svg";
import image8 from "../../img/topicsIcon/./icons/power-off-line-icon.svg";
import image9 from "../../img/topicsIcon/./icons/sports-car-icon.svg";
import image10 from "../../img/topicsIcon/./icons/palm-tree-icon.svg";
import image11 from "../../img/topicsIcon/./icons/policy-icon.svg";
import image12 from "../../img/topicsIcon/./icons/solar-panel-home-9387.svg";

export default function Topic() {
  return (
    <div className={s.background}>
      <Title name={"Topics"} />
      <div className={s.grid}>
        <Card link={"/benefits"} name={"BENEFITS"} image={image1} />

        <Card link={"/climate-change"} name={"CLIMATE CHANGE"} image={image2} />

        <Card
          link={"/energy-transition"}
          name={"ENERGY TRANSITION"}
          image={image3}
        />
        <Card
          link={"/finance-and-investment"}
          name={"FINANCE & INVESTMENT"}
          image={image4}
        />
        <Card
          link={"/benefitsheating-and-cooling"}
          name={"HEATING & COOLING"}
          image={image5}
        />
        <Card
          link={"/innovation-technology"}
          name={"INNOVATION & TECHNOLOGY"}
          image={image6}
        />
        <Card link={"/off-grid"} name={"COSTS"} image={image7} />
        <Card link={"/policy"} name={"POWER"} image={image8} />
        <Card
          link={"/inductry-transport"}
          name={"INDUCTRY & TRANSPORT"}
          image={image9}
        />
        <Card link={"/costs"} name={"POLICY"} image={image11} />
        <Card link={"/islands"} name={"ISLANDS"} image={image10} />
        <Card
          link={"/power"}
          name={"OFF-GRID FOR ENERGY ACCESS"}
          image={image12}
        />
      </div>
    </div>
  );
}
