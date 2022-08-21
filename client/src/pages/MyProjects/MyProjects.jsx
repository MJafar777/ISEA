import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Search from "../../components/Search/Search";

import s from "./myProjects.module.css";

const MyProjects = function () {
  return (
    <div className="container">
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

export default MyProjects;
