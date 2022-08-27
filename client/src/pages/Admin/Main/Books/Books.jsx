import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../../store/bookSlice";
import s from "./books.module.css";
import { BooksGet } from "../../../../store/bookSlice";
import Book from "./Book/Book";

export default function Books() {
  const titleRef = useRef();
  const langRef = useRef();
  const categoryRef = useRef();
  const subDescripRef = useRef();
  const descripRef = useRef();
  const publisherRef = useRef();

  const [style, setStyle] = useState({});
  const [event, setEvent] = useState(false);

  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const language = langRef.current.value;
    const category = categoryRef.current.value;
    const sub_description = subDescripRef.current.value;
    const description = descripRef.current.value;
    const publisher = publisherRef.current.value;
    dispatch(
      addBook({
        title,
        language,
        category,
        sub_description,
        description,
        publisher,
        image,
        file,
      })
    );
  };

  const clickHandler = (e) => {
    setEvent(event ? false : true);

    if (!event) {
      setStyle({ display: "block", transform: "translateY(0)", opacity: "1" });
    } else {
      setStyle({});
    }
  };

  useEffect(() => {
    dispatch(BooksGet());
  }, []);

  const books = useSelector((store) => store.books.books);
  const status = useSelector((store) => store.books.status);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>BOOKS</h2>
        <div onClick={clickHandler} className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.main}>
        <form className={s.form} style={style}>
          <div className={s.form2}>
            <div className={s.form1}>
              <h2>Add book</h2>
              <input ref={titleRef} type="text" placeholder="Sarlavha" />
              <input ref={categoryRef} type="text" placeholder="category" />
              <input ref={publisherRef} type="text" placeholder="publisher" />
              <select ref={langRef}>
                <option value="eng">Ingliz tili</option>
                <option value="rus">Rus tili</option>
                <option value="uzb">Uzbek tili</option>
              </select>
              <textarea
                ref={subDescripRef}
                placeholder="asosiy maluomot"
              ></textarea>
              <textarea ref={descripRef} placeholder="description"></textarea>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button onClick={submitHandler}>submit</button>
            </div>
          </div>
        </form>
        {status === "resolved" &&
          books.map((val) => {
            return (
              <Book
                title={val.title}
                text={val.sub_description}
                category={val.category}
                language={val.language}
              />
            );
          })}
      </div>
    </div>
  );
}
