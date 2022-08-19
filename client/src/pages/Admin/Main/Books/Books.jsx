import React from "react";
import s from "./books.module.css";

export default function Books() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>Books</h2>
        <div>
          <p>Select Category</p>
          <select>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div>
          <p>Select Category</p>
          <select>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>
    </div>
  );
}
