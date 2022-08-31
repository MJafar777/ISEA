import React from "react";
import Title from "../Title/Title";
import LeftSide from "./Left/LeftSide";
import s from "./NewsLanding.module.css";
import RightSide from "./Right/RightSide";
// import image from "../../img/New/1.jpg";
import image from "../../img/New/stalba.jpg";

// import image1 from "../../img/New/2.png";
// import image2 from "../../img/New/3.jpg";
// import image3 from "../../img/New/4.jpg";
// import image4 from "../../img/New/5.jpg";
import image1 from "../../img/New/22.jpg";
import image2 from "../../img/New/44.jpg";
import image3 from "../../img/New/22.jpg";
import image4 from "../../img/New/44.jpg";

export default function NewsLanding({}) {
  return (
    <div className={s.container}>
      <Title name="Latest News" />
      <div className={s.main}>
        <LeftSide
          image={image}
          title={"Winter diesel shock looms as tanks dry up ahead of sanctions"}
          text={
            "Europe is heading into winter with seasonally low levels of diesel in storage tanks, with major implications for the continent's industries and drivers in the run-up to          EU sanctions on Russian crude oil and refined product supplies."
          }
          date={"12-03-2021"}
        />
        <div className={s.right}>
          <RightSide
            title={
              "Winter diesel shock looms as tanks dry up ahead of sanctions"
            }
            image={image1}
            date={"12-04-2022"}
          />
          <RightSide
            title={
              "Russian oil flows via Druzhba to Czech Republic to resume 1800 GMT Friday -pipeline operator"
            }
            image={image2}
            date={"12-04-2022"}
          />
          <RightSide
            title={
              "In the heart of coal country, U.S. climate bill could push up green shoots"
            }
            image={image3}
            date={"12-04-2022"}
          />
          <RightSide
            title={
              "Winter diesel shock looms as tanks dry up ahead of sanctions"
            }
            image={image4}
            date={"12-04-2022"}
          />
        </div>
      </div>
    </div>
  );
}
