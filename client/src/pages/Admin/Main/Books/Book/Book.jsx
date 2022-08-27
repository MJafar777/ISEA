import React from "react";
import s from "../books.module.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import images from "../../../../../img/Publications/1.jpg";

const Book = ({ title, text, category, language }) => {
  const deleteHandler = () => {};

  return (
    <div className={s.card}>
      <div className={s.left}>
        <div className={s.image}>
          <img src={images} />
        </div>
        <div className={s.data}>
          <div>
            <h2 className={s.title}>{title}</h2>
            <p className={s.text}>{text}</p>
          </div>
          <div>
            <p className={s.about}>
              12-03-2004 | {category} | {language}
            </p>
          </div>
        </div>
      </div>
      <div className={s.editing}>
        <div onClick={deleteHandler} className={s.delete}>
          <AiFillDelete className={s.deleteIcon} />
        </div>
        <div className={s.edit}>
          <BsFillPencilFill className={s.editIcon} />
        </div>
      </div>
    </div>
  );
};

export default Book;
