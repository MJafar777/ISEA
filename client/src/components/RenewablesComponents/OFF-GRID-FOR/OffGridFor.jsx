import React from "react";
import Title from "../../Title/Title";
import Shablon from "../ShablonRenewables/Shablon";

import img1 from "../../../img/Renewables/IMG_20220306_114700.jpg";
import img2 from "../../../img/Renewables/photo_2022-04-12_16-52-56.jpg";
import img3 from "../../../img/Renewables/photo_2022-04-18_17-38-59.jpg";
import img4 from "../../../img/Renewables/photo_2022-04-22_17-13-06.jpg";
import img5 from "../../../img/Renewables/photo_2022-04-27_17-29-06.jpg";
import img6 from "../../../img/Renewables/site2.jpg";

const OffGridFor = () => {
  return (
    <div className="container">
      <Title name={"OFF-GRID FOR ENERGY ACCESS"} />
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

export default OffGridFor;
