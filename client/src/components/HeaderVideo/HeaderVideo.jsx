import React from "react";

import s from "./headerVideo.module.css";

import headerVideo from "../../img/headerVideo/isea1.mp4";
const HeaderVideo = () => {
  return (
    <div className={s.headerVideo}>
      {/* <video autoPlay muted loop className={s.myVideo}>
        <source className={s.heroVideo} src={headerVideo} type="video/mp4" />
      </video> */}
      <div className={s.content}>
        <div className={s.contentChild}>
          <h1 className={s.title}>ISEA ASSOCIATION</h1>
          <p className={s.description}>
            The main purpose of the activity: training and retraining of personnel at the international level in the
            field of solar energy, supporting the effective use of advanced technologies in the field of solar energy.
          </p>
          <button className={s.button}>Read more </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
