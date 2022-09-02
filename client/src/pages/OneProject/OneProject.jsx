import React, { useEffect } from "react";
import image from "../../img/Projects/photo-02.avif";
import s from "./oneProject.module.css";
import Review from "../../components/Review/Review";
import { useParams } from "react-router-dom";
import { getOneProject } from "../../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

const OneProject = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProject({ id }));
  }, []);
  const project = useSelector((store) => store.projects.project);
  console.log(project);
  return (
    <div className="container">
      <div className={s.oneProject}>
        <div className={s.download_project}>
          <img
            src={image}
            alt="this is project image"
            className={s.download_image}
          />
          <p className={s.date}>
            <Moment format="YYYY/MM/DD" date={project.createdAt} />
          </p>
          <h3 className={s.publisher}>Publisher:Aqlli Jafar</h3>
          <form action="/">
            <button className="download">Download</button>
          </form>
        </div>
        <div className={s.project}>
          <h1 className={s.pro_title}>{project.title}</h1>
          <p className={s.pro_des}>{project.description}</p>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default OneProject;
