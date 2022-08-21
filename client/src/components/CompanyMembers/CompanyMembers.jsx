import React from "react";
import Title from "../Title/Title";
import s from "./companyMembers.module.css";

import one from "../../img/CompanyMembers/1.aiff";
import two from "../../img/CompanyMembers/2.jpg";
import three from "../../img/CompanyMembers/3.jpg";

import left from "../../img/icons/left_icon.svg";
import right from "../../img/icons/right_icon.svg";

const CompanyMembers = () => {
  return (
    <div className="container">
      <Title name={"Company Members"} />
      <div className={s.parentContainer}>
        <img className={s.control_Slider} src={left} alt="left" />
        <div className={s.slider}>
          <img className={s.slayd} src={one} alt="one" />
          <img className={s.slayd} src={two} alt="two" />
          <img className={s.slayd} src={three} alt="three" />
          <img className={s.slayd} src={one} alt="one" />
          <img className={s.slayd} src={two} alt="two" />
          <img className={s.slayd} src={three} alt="three" />
          <img className={s.slayd} src={one} alt="one" />
          <img className={s.slayd} src={two} alt="two" />
          <img className={s.slayd} src={three} alt="three" />
          <img className={s.slayd} src={one} alt="one" />
          <img className={s.slayd} src={two} alt="two" />
          <img className={s.slayd} src={three} alt="three" />
        </div>
        <img className={s.control_Slider} src={right} alt="right" />
      </div>
    </div>
  );
};

export default CompanyMembers;
