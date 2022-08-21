import React from "react";
import s from "./project.module.css";

const ProjectCard = function () {
  return (
    <div>
      <div className={s.card}>
        <div className={s.main}>
          <a href="#" className={"btn" + " " + s.btn}>
            Get info
          </a>
          <p className={s.title}>This is Project title </p>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            totam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
