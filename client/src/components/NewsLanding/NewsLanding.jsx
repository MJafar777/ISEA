import React from "react";
import Title from "../Title/Title";
import LeftSide from "./Left/LeftSide";
import s from "./NewsLanding.module.css";
import RightSide from "./Right/RightSide";
import image from "../../img/New/1.jpg";

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
        />
        <RightSide title={"birnma"} />
      </div>
    </div>
  );
}
