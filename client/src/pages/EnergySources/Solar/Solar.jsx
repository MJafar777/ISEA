import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";

import img1 from "../../../img/energySources/solar/img1.jfif";
import img2 from "../../../img/energySources/solar/im2.jpg";
import img3 from "../../../img/energySources/solar/img3.jfif";
import img4 from "../../../img/energySources/solar/img4.jpg";

const Solar = () => {
  const content1 =
    "Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture.";
  const content2 =
    "It is an essential source of renewable energy, and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power. Active solar techniques include the use of photovoltaic systems, concentrated solar power, and solar water heating to harness the energy. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light-dispersing properties, and designing spaces that naturally circulate air.";
  const content3 =
    "The large magnitude of solar energy available makes it a highly appealing source of electricity. In 2020 solar energy has been the cheapest source of Electricity. In Saudi Arabia a power purchase agreement (ppa) have been signed in April 2021 for a new solar power plant in Al-Faisaliah. The project has recorded the world’s lowest cost for Solar PV electricity production of USD 1.04 cents/ kWh.";
  const content4 =
    "In 2011, the International Energy Agency said that he development of affordable, inexhaustible and clean solar energy technologies will have huge longer-term benefits. It will increase countries' energy security through reliance on an indigenous, inexhaustible, and mostly import-independent resource, enhance sustainability, reduce pollution, lower the costs of mitigating global warming .... These advantages are global.";

  return (
    <div className="container">
      <Title name={"Solar"} />
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

export default Solar;
