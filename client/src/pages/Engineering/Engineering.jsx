import React from "react";

import a from "./engineering.module.css";
const Engineering = () => {
  const Component = a.engineeringTitle + " " + "container";
  return (
    <>
      <div className={a.background}>
        <div className={Component}>
          <h1 className={a.titleH1}>THE ENGINEERING organisation</h1>
        </div>
      </div>
      <div className={a.background2}></div>
    </>
  );
};

export default Engineering;
