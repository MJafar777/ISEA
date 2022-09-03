import React from "react";
import s from "./iseaLiderShip.module.css";

import img1 from "../../img/ISEA_Lidership/niyozbek.avif";
import img2 from "../../img/ISEA_Lidership/jafar.avif";
import img3 from "../../img/ISEA_Lidership/mamur.avif";

import { NavLink, useParams } from "react-router-dom";

const IseaLiderShip = () => {
  return (
    <div className="container">
      <div className={s.liderShip}>
        <div className={s.top}>
          <h1 className={s.title1}>ISEA Leadership</h1>
          <hr className={s.row} />
        </div>
        <h1 className={s.title2}>IT Department</h1>
        <div className={s.it}>
          <div className={s.member}>
            <NavLink to="/isea-leadership/3" className={s.jafar}>
              <img src={img3} alt="member" className={s.mamur} />
              <h1 className={s.memberName}>Member name goes here</h1>
              <h2 className={s.memberPosition}>Member position goes here</h2>
            </NavLink>
          </div>
          <div className={s.member}>
            <NavLink to="/isea-leadership/1" className={s.jafar}>
              <img src={img2} alt="member" />
              <h1 className={s.memberName}>Member name goes here</h1>
              <h2 className={s.memberPosition}>Member position goes here</h2>
            </NavLink>
          </div>
          <div className={s.member}>
            <NavLink to="/isea-leadership/2" className={s.jafar}>
              <img src={img1} alt="member" />
              <h1 className={s.memberName}>Member name goes here</h1>
              <h2 className={s.memberPosition}>Member position goes here</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IseaLiderShip;
