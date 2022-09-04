import React from "react";
import EnergySourcesShablon from "../../../components/EnergySources/EnergySourcesShablon/EnergySourcesShablon";
import Title from "../../../components/Title/Title";

const Bioenergy = () => {
  
  const content1 = "";
  const content2 = "";
  const content3 = "";
  const content4 = "";
  return (
    <div className="container">
      <Title name={"Bioenergy"} />
      <EnergySourcesShablon
        content1={content1}
        // img1={img1}
        // img2={img2}
        content2={content2}
      />
      <EnergySourcesShablon
        content1={content3}
        // img1={img3}
        // img2={img4}
        content2={content4}
      />
    </div>
  );
};

export default Bioenergy;
