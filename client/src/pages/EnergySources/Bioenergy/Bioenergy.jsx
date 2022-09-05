import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";

import img1 from "../../../img/energySources/bioenergy/img4.jpg";
import img2 from "../../../img/energySources/bioenergy/img2.jfif";
import img3 from "../../../img/energySources/bioenergy/img3.jfif";
import img4 from "../../../img/energySources/bioenergy/img1.jfif";

const Bioenergy = () => {
  const content1 =
    "When biomass is used as an energy source, it's referred to as 'feedstock'. Feedstocks can be grown specifically for their energy content (an energy crop), or they can be made up of waste products from industries such as agriculture, food processing or timber production.";
  const content2 =
    "Wet feedstocks, like food waste for example, are put into sealed tanks where they rot and produce methane gas (also called biogas). The gas can be captured and burnt to generate electricity. Or it can be injected into the national gas grid and be used for cooking and heating.";
  const content3 =
    "Bioenergy is a very flexible energy source. It can be turned up and down quickly to meet demand, making it a great backup for weather-dependent renewable technologies such as wind and solar.";
  const content4 =
    "In comparison, burning fossil fuels releases carbon dioxide that has been locked away for millions of years, from a time when the earth's atmosphere was very different. This adds more carbon dioxide into our current atmosphere, breaking the carbon balance.";
  return (
    <div className="container">
      <Title name={"Bioenergy"} />
      <EnergySourcesShablon
        content1={content1}
        img1={img1}
        img2={img2}
        content2={content2}
      />
      <EnergySourcesShablon
        content1={content3}
        img1={img3}
        img2={img4}
        content2={content4}
      />
    </div>
  );
};

export default Bioenergy;
