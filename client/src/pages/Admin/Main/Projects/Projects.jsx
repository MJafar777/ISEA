import React from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

import s from "./projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Projects</h2>
      </div>
      <div className={s.pro}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
