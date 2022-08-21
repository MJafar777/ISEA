import React from "react";
import image from "../../img/Projects/photo-02.jpg";

import s from "./oneProject.module.css";

const OneProject = function () {
  return (
    <div className="container">
      <div className={s.oneProject}>
        <div className={s.download_project}>
          <img
            src={image}
            alt="this is project image"
            className={s.download_image}
          />
          <p className={s.date}>16.04.2002</p>
          <h3 className={s.publisher}>Publisher:Aqlli Jafar</h3>
          <form action="/">
            <button className="download">Download</button>
          </form>
        </div>
        <div className={s.project}>
          <h1 className={s.pro_title}>Project title goes here</h1>
          <p className={s.pro_des}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex
            quaerat ut, dolores officiis soluta magnam aut iste commodi in,
            quasi est culpa eius, sit non mollitia doloremque eligendi unde
            aperiam aliquid esse voluptate error? Alias asperiores optio
            eligendi quasi aut, laboriosam libero fugit? Odio accusamus saepe
            blanditiis fugiat omnis.
          </p>
        </div>
        <div className={s.pro_review}>
          <div>
            <div>
              <img src={image} alt="" className={s.userImage} />
            </div>
            <div>
              <h1 className={s.user_name}>User Name goes here</h1>
              <p className={s.user_review}>
                User Review goes here User Review goes here User Review goes
                here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProject;
