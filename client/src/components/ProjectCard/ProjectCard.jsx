import React from "react";
import { NavLink } from "react-router-dom";
import s from "./project.module.css";

const ProjectCard = function () {
  return (
    <div>
      <div className={s.card}>
        <div className={s.main}>
          <NavLink to="/project/1" className={"btn" + " " + s.btn}>
            Get info
          </NavLink>
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
