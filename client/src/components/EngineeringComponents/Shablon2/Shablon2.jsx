import React from "react";
import Title from "../../Title/Title";
import a from "./shablon2.module.css";

const Shablon2 = (img, title, subtitle) => {
  const cont = "container" + " " + a.titleSection;
  return (
    <div className={a.shablon2}>
      <div className={cont}>
        <div className={a.leftSection}>
          <h1>Title</h1>
          <div>
            {/* <h2>{title} title1</h2> */}
            <h2> title1</h2>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
        <div className={a.rightSection}></div>
      </div>
    </div>
  );
};

export default Shablon2;
