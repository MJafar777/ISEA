import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import img from "../../img/enginier/backEnergy.jpg";
import img2 from "../../img/enginier/img.jpg";
import img3 from "../../img/enginier/shamolEnergy.jpg";

import a from "./engineering.module.css";
import Title from "../../components/Title/Title";

const Engineering = () => {
  const Component = a.engineeringTitle + " " + "container";

  return (
    <>
      <div>
        <div className={a.background}>
          <div className={Component}>
            <h1 className={a.titleH1}>THE ENGINEERING organisation</h1>
            <p className={a.paragrof}>
              INNOVATIVE SOLUTIONS FOR HUMAN AND ENVIRONMENTAL APPLICATION
            </p>
            <div className={a.link2}>
              <NavLink className={a.linkAboutMenu} to={"/about"}>
                more about the organisation
              </NavLink>
              <AiOutlineArrowRight className={a.right} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title name={"Engineering"} />
      </div>
      <div className={a.count}>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img} alt="img" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img2} alt="img2" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className={a.grid}>
          <div className={a.cell}>
            <img className={a.imgs1} src={img3} alt="img3" />
            <div className={a.textParent}>
              <p className={a.text}>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;
