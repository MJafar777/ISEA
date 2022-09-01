import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Search from "../../components/Search/Search";

import s from "./project.module.css";

const Projects = function () {
  return (
    <div className={"container" + " " + s.top}>
      <Search placeholder="Search Your Projects..." />
      <div className={s.cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
