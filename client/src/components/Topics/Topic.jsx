import React from "react";
import Title from "../Title/Title";
import s from "./topics.module.css";
import Card from "./Card/Card";

import image1 from "../../img/topicsIcon/benefits-icon.svg";
import image2 from "../../img/topicsIcon/climate-icon.svg";
import image3 from "../../img/topicsIcon/reload-sync-icon.svg";
import image4 from "../../img/topicsIcon/finance-icon.svg";
import image5 from "../../img/topicsIcon/low-temperature-icon.svg";
import image6 from "../../img/topicsIcon/ideas-icon.svg";
import image7 from "../../img/topicsIcon/income-growth-icon.svg";
import image8 from "../../img/topicsIcon/power-off-line-icon.svg";
import image9 from "../../img/topicsIcon/sports-car-icon.svg";

export default function Topic() {
  return (
    <div className={s.background + " " + "container"}>
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
          name={"FINANCE INVESTMENT"}
          image={image4}
        />
        <Card
          link={"/heating-cooling"}
          name={"HEATING COOLING"}
          image={image5}
        />
        <Card
          link={"/innovation-technology"}
          name={"INNOVATION TECHNOLOGY"}
          image={image6}
        />
        <Card link={"/costs"} name={"COSTS"} image={image7} />
        <Card link={"/power"} name={"POWER"} image={image8} />
        <Card
          link={"/inductry-transport"}
          name={"INDUCTRY TRANSPORT"}
          image={image9}
        />
      </div>
    </div>
  );
}
