import React from "react";

import Title from "../../Title/Title";
import Shablon from "../ShablonRenewables/Shablon";

import img1 from "../../../img/hero-Slider/1.jpg";
import img2 from "../../../img/hero-Slider/2.jpg";
import img3 from "../../../img/hero-Slider/3.jpg";
import img4 from "../../../img/hero-Slider/4.jpg";
import img5 from "../../../img/hero-Slider/5.jpg";
import img6 from "../../../img/hero-Slider/6.jpg";

const Benefitsheating = () => {
  return (
    <div className="container">
      <Title name={"BENEFITSHEATING & COOLING"} />
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

export default Benefitsheating;
