import React from "react";
import Title from "../../Title/Title";
import a from "./shablon2.module.css";
import imgTitle from "../../../img/factory/9.jpg";
const Shablon2 = (img, title, subtitle) => {
  const cont = "container" + " " + a.titleSection;
  return (
    <div className={a.shablon2}>
      <div className={cont}>
        <div className={a.leftSection}>
          <h1>Title</h1>
          <h2> title1</h2>
          <div className={a.content}>
            <img className={a.imgTitle} src={imgTitle} alt="imgTitle" />
            <p className={a.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              architecto dolor inventore illo animi incidunt fugit. Minima sint,
              blanditiis repellat impedit dicta tempore, aliquam nam vel tempora
              voluptas a similique! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nisi accusamus porro quam commodi illum at a
              eos, delectus labore dignissimos aut odio, nemo corporis, iure
              eius ratione expedita! Modi impedit earum nihil natus numquam
              assumenda veritatis voluptatum a qui incidunt.
            </p>
          </div>
        </div>
        <div className={a.rightSection}></div>
      </div>
    </div>
  );
};

export default Shablon2;
