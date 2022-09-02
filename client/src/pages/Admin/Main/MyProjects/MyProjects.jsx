import React, { useEffect, useRef, useState } from "react";
import s from "./projects.module.css";
import { useDispatch } from "react-redux";
import { addProject } from "../../../../store/projectSlice";

const MyProjects = () => {
  const [presentation, setPresentation] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const titleRef = useRef();
  const descripRef = useRef();
  const subDescripRef = useRef();
  const categoryRef = useRef();
  const publisherRef = useRef();
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descripRef.current.value;
    const sub_description = subDescripRef.current.value;
    const publisher = publisherRef.current.value;
    const category = categoryRef.current.value;
    dispatch(
      addProject({
        title,
        description,
        sub_description,
        publisher,
        category,
        presentation,
        projectImage,
      })
    );
    titleRef.current.value = "";
    descripRef.current.value = "";
    subDescripRef.current.value = "";
    publisherRef.current.value = "";
    categoryRef.current.value = "";
  };

  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Projects</h2>
        <div className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.input}>
        <form action="" className={s.form}>
          <input type="text" name="title" placeholder="Title" ref={titleRef} />
          <input
            type="text"
            name="category"
            placeholder="Category"
            ref={categoryRef}
          />
          <input
            type="text"
            name="sub_description"
            ref={subDescripRef}
            placeholder="Project haqida qisqacha malumot"
          />
          <label htmlFor="file1">Iltimos project rasmini kiriting</label>
          <input
            type="file"
            name="projectImage"
            id="file1"
            placeholder="Photoni kiriting"
            accept="image/"
            onChange={(e) => setProjectImage(e.target.files[0])}
          />
          <label htmlFor="file2">
            Iltimos project presentatsiyasini kiriting
          </label>
          <input
            type="file"
            name="presentation"
            id="file2"
            onChange={(e) => setPresentation(e.target.files[0])}
            placeholder="Presentatsiyani kiriting"
          />

          <select ref={categoryRef} name="category" id="category">
            <option value="articles">Articles</option>
            <option value="presses">Presses</option>
            <option value="experts">Experts</option>
          </select>
          <input
            ref={publisherRef}
            type="text"
            name="publisher"
            placeholder="Publisher"
          />
          <textarea
            ref={descripRef}
            type="text"
            name="description"
            placeholder="Description"
          />
          <button onClick={clickHandler}>ADD</button>
        </form>
      </div>
    </>
  );
};

export default MyProjects;
