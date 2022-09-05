import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";
import img1 from "../../../img/energySources/hdropower/img1.png";
import img2 from "../../../img/energySources/hdropower/img2.jfif";
import img3 from "../../../img/energySources/hdropower/img3.jpg";
import img4 from "../../../img/energySources/hdropower/img4.jfif";

const Hydopower = () => {
  const content1 =
    "Hydropower (from Greek:  water), also known as water power, is the use of falling or fast-running water to produce electricity or to power machines. This is achieved by converting the gravitational potential or kinetic energy of a water source to produce power. Hydropower is a method of sustainable energy production.";
  const content2 =
    "Since ancient times, hydropower from watermills has been used as a renewable energy source for irrigation and the operation of mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance.";
  const content3 =
    "Hydropower is now used principally for hydroelectric power generation, and is also applied as one half of an energy storage system known as pumped-storage hydroelectricity.";
  const content4 =
    "Hydropower is an attractive alternative to fossil fuels as it does not directly produce carbon dioxide or other atmospheric pollutants and it provides a relatively consistent source of power. Nonetheless, it has economic, sociological, and environmental downsides and requires a sufficiently energetic source of water, such as a river or elevated lake. International institutions such as the World Bank view hydropower as a low-carbon means for economic development.";
  return (
    <div className="container">
      <Title name={"Hydropower"} />
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

export default Hydopower;
