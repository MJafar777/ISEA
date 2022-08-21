import React from "react";
import Title from "../Title/Title";
import s from "./topics.module.css";
import Card from "./Card/Card";
// import image1 from "../../img/iconTopics/1,1.png";
// import image2 from "../../img/iconTopics/2.png";
// import image3 from "../../img/iconTopics/3.png";
// import image4 from "../../img/iconTopics/4.png";
// import image5 from "../../img/iconTopics/5.png";
// import image6 from "../../img/iconTopics/6.png";
// import image7 from "../../img/iconTopics/7.png";
// import image8 from "../../img/iconTopics/8.png";
// import image9 from "../../img/iconTopics/9,0.png";
// import image10 from "../../img/iconTopics/9,1.png";
// import image11 from "../../img/iconTopics/9,2.png";
// import image12 from "../../img/iconTopics/9,3.png";

import image1 from "../../img/topicsIcon/bio-energy.png";
import image2 from "../../img/topicsIcon/earth.png";
import image3 from "../../img/topicsIcon/refresh-button.png";
import image4 from "../../img/topicsIcon/coins.png";
import image5 from "../../img/topicsIcon/temperatures.png";
import image6 from "../../img/topicsIcon/idea.png";
import image7 from "../../img/topicsIcon/eco-house.png";
import image8 from "../../img/topicsIcon/policy.png";
import image9 from "../../img/topicsIcon/power-on.png";
import image10 from "../../img/topicsIcon/electric-car.png";
import image11 from "../../img/topicsIcon/earning.png";
import image12 from "../../img/topicsIcon/oasis.png";
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
        <Card
          link={"/off-grid"}
          name={"OFF-GRID FOR ENERGY ACCESS"}
          image={image7}
        />
        <Card link={"/policy"} name={"POLICY"} image={image8} />
        <Card
          link={"/inductry-transport"}
          name={"INDUCTRY & TRANSPORT"}
          image={image9}
        />
        <Card link={"/costs"} name={"COSTS"} image={image10} />
        <Card link={"/islands"} name={"ISLANDS"} image={image11} />
        <Card link={"/power"} name={"POWER"} image={image12} />
      </div>
    </div>
  );
}
