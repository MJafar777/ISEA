import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";

import img1 from "../../../img/energySources/wind/img1.jpg";
import img2 from "../../../img/energySources/wind/img2.jpg";
import img3 from "../../../img/energySources/wind/img3.jpg";
import img4 from "../../../img/energySources/wind/img4.jpg";

const Wind = () => {
  const content1 =
    "Wind power is mostly the use of wind turbines to generate electricity. Wind power is a popular, sustainable, renewable energy source that has a much smaller impact on the environment than burning fossil fuels. Historically, wind power has been used in sails, windmills and windpumps but today it is mostly used to generate electricity. Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network.";
  const content2 =
    "New onshore wind farms are cheaper than new coal or gas plants, but expansion of wind power is being hindered by fossil fuel subsidies. Onshore wind farms have a greater visual impact on the landscape than some other power stations. Small onshore wind farms can feed some energy into the grid or provide power to isolated off-grid locations. Off shore wind farms provide a steadier and stronger source of energy and have less visual impact. Although there is less offshore wind power at present and construction and maintenance costs are higher, it is expanding.";

  const content3 =
    "Wind power is variable renewable energy, so power-management techniques are used to match supply and demand, such as: wind hybrid power systems, hydroelectric power or other dispatchable power sources, excess capacity, geographically distributed turbines, exporting and importing power to neighboring areas, or grid storage. As the proportion of wind power in a region increases the grid may need to be upgraded.Weather forecasting allows the electric-power network to be readied for the predictable variations in production that occur.";
  const content4 =
    "In 2022, wind supplied over 1500 TWh of electricity, which was over 6% of world electricity and about 2% of world energy. With about 100 GW added during 2022, mostly in China and the United States, global installed wind power capacity exceeded 800 GW. To help meet the Paris Agreement goals to limit climate change, analysts say it should expand much faster - by over 1% of electricity generation per year.";
  return (
    <div className="container">
      <Title name={"Wind"} />
      <EnergySourcesShablon
        content1={content1}
        img1={img1}
        content2={content2}
        img2={img2}
      />
      <EnergySourcesShablon
        content1={content3}
        img1={img3}
        content2={content4}
        img2={img4}
      />
    </div>
  );
};

export default Wind;
