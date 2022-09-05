import React from "react";
import s from "./energyShablon.module.css";

const EnergySourcesShablon = ({
  img1 = "",
  content1 = "",
  content2 = "",
  img2 = "",
}) => {
  return (
    <div>
      <div className={s.energySourcesShablon}>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.right1} src={img1} alt="img2" />
            <h3 className={s.text}>{content1}</h3>
            <img className={s.right} src={img1} alt="img2" />
          </div>
        </div>
        <div className={s.contentCard}>
          <div className={s.cardChild}>
            <img className={s.left} src={img2} alt="img2" />
            <h3 className={s.text}>{content2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergySourcesShablon;
