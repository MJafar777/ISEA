import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";

import img1 from "../../../img/energySources/Geothermal/img1.jfif";
import img2 from "../../../img/energySources/Geothermal/img2.jfif";
import img3 from "../../../img/energySources/Geothermal/img3.jpg";
import img4 from "../../../img/energySources/Geothermal/img4.jpg";
const Geothermal = () => {
  const content1 =
    "Geothermal energy is the thermal energy in the Earth's crust which originates from the formation of the planet and from radioactive decay of materials in currently uncertain but possibly roughly equal proportions. The high temperature and pressure in Earth's interior cause some rock to melt and solid mantle to behave plastically. This results in parts of the mantle convecting upward since it is lighter than the surrounding rock. Temperatures at the core–mantle boundary can reach over 4000 °C (7200 °F).";
  const content2 =
    "Geothermal heating, using water from hot springs, for example, has been used for bathing since Paleolithic times and for space heating since ancient Roman times. More recently geothermal power, the term used for generation of electricity from geothermal energy, has gained in importance. It is estimated that the earth's geothermal resources are theoretically more than adequate to supply humanity's energy needs, although only a very small fraction is currently being profitably exploited, often in areas near tectonic plate boundaries.";
  const content3 =
    "As a result of government assisted research and industry experience, the cost of generating geothermal power decreased by 25% over the 1980s and 1990s. More recent technological advances have dramatically reduced costs and thereby expanded the range and size of viable resources. In 2021, the U.S. Department of Energy estimates that geothermal energy from a power plant built today costs about $0.05/kWh.";
  const content4 =
    "Forecasts for the future of geothermal power depend on assumptions about technology, energy prices, subsidies, plate boundary movement and interest rates. Pilot programs like EWEB's customer opt in Green Power Program show that customers would be willing to pay a little more for a renewable energy source like geothermal. About 100 thousand people are employed in the industry. The adjective geothermal originates from the Greek roots , meaning Earth, and  meaning hot.";
  return (
    <div className="container">
        <Title name={"Geothermal"} />
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

export default Geothermal;
