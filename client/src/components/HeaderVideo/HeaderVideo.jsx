import React from "react";

import s from "./headerVideo.module.css";

import headerVideo from "../../img/headerVideo/isea.mp4";
const HeaderVideo = () => {
  const btn = s.myBtn;
  return (
    <div className={s.headerVideo}>
      <video autoPlay muted loop id={s.myVideo}>
        <source src={headerVideo} type="video/mp4" />
      </video>
      <div class={s.content}>
        <h1 className={s.title}>ISEA ORGANISATION</h1>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
          latine molestiae, ad mutat oblique delicatissimi pro.
        </p>
        <button id={btn}>Read more...</button>
      </div>
    </div>
  );
};

export default HeaderVideo;
