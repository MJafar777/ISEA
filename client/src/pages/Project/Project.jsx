import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Search from "../../components/Search/Search";
import s from "./project.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/projectSlice";
import { useEffect } from "react";

const Projects = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  const projects = useSelector((store) => store.projects.projects);

  return (
    <div className={"container" + " " + s.top}>
      <Search placeholder="Search Your Projects..." />
      <div className={s.cards}>
        {projects.map((val, key) => {
          return (
            <ProjectCard
              key={key}
              image={val.projectImage}
              sub_description={val.sub_description}
              id={val._id}
              title={val.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
