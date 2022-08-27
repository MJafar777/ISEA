import React from "react";
import s from "./news.module.css";

export default function News() {
  const clickHandler = () => {};
  return (
    <div>
      <div className={s.header}>
        <h2 className={s.title}>NEWS</h2>
        <div onClick={clickHandler} className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.input}>
        <form action="" className={s.form}>
          <input type="text" name="title" placeholder="Title" />
          <input type="file" name="photo" placeholder="Photo" />
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
    </div>
  );
}
