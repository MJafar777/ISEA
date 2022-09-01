import React from "react";

import img1 from "../../../img/hero-Slider/1.avif";
import img2 from "../../../img/hero-Slider/2.avif";
import img3 from "../../../img/hero-Slider/3.avif";
import img4 from "../../../img/hero-Slider/4.avif";
import img5 from "../../../img/hero-Slider/5.avif";
import img6 from "../../../img/hero-Slider/6.avif";
import Title from "../../Title/Title";
import Shablon from "../ShablonRenewables/Shablon";

const ClimateChange = () => {
  return (
    <div className="container">
      <Title name={"Climate Change"} />
      <div className="cardInfo">
        <Shablon
          imgUrl={img1}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
        <Shablon
          imgUrl={img2}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
        <Shablon
          imgUrl={img3}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
        <Shablon
          imgUrl={img4}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
        <Shablon
          imgUrl={img5}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
        <Shablon
          imgUrl={img6}
          title={"my profile"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sunt quod aspernatur! Obcaecati sint nulla voluptates, laudantium aliquid ut! Architecto quae laborum blanditiis soluta rem eius, minus ex enim!"
          }
        />
      </div>
    </div>
  );
};

export default ClimateChange;
