import React from "react";
import { NavLink } from "react-router-dom";
import s from "./project.module.css";

const ProjectCard = function ({ sub_description, id, title, image }) {
  const style = {
    "background-image": `linear-gradient(to left, rgba(0, 0, 0, 0.376) 0 100%), url(\"http://localhost:8000/img/projects/${image}\")`,
  };
  return (
    <div>
      <div style={style} className={s.card}>
        <div className={s.main}>
          <NavLink to={"/project/" + id} className={"btn" + " " + s.btn}>
            Get info
          </NavLink>
          <p className={s.title}>{title}</p>
          <p className={s.desc}>{sub_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
