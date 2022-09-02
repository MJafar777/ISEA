import React, { useEffect, useRef } from "react";
import s from "./projects.module.css";
import { useDispatch } from "react-redux";
const MyProjects = () => {
  const dispatch = useDispatch();

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
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="category" placeholder="Category" />
          <input
            type="text"
            name="sub_description"
            placeholder="Project haqida qisqacha malumot"
          />
          <input
            type="text"
            name="description"
            placeholder="Project haqida toliq malumot"
          />
          <label for="file1">Iltimos project rasmini kiriting</label>
          <input
            type="file"
            name="projectImage"
            id="file1"
            placeholder="Photoni kiriting"
            accept="image/"
          />
          <label for="file2">Iltimos project presentatsiyasini kiriting</label>
          <input
            type="file"
            name="presentation"
            id="file2"
            placeholder="Presentatsiyani kiriting"
          />

          <select name="category" id="category">
            <option value="articles">Articles</option>
            <option value="presses">Presses</option>
            <option value="experts">Experts</option>
          </select>
          <input type="text" name="publisher" placeholder="Publisher" />
          <textarea type="text" name="description" placeholder="Description" />
          <button type="submit">ADD</button>
        </form>
      </div>
    </>
  );
};

export default MyProjects;
