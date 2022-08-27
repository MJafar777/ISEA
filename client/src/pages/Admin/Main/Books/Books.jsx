import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../../store/bookSlice";
import s from "./books.module.css";
import { BooksGet } from "../../../../store/bookSlice";
import images from "../../../../img/Publications/1.jpg";

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

  const deleteHandler = () => {};
  useEffect(() => {
    dispatch(BooksGet());
  }, []);
  const books = useSelector((store) => store.books.books);

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
        <div className={s.card}>
          <div className={s.left}>
            <div className={s.image}>
              <img src={images} />
            </div>
            <div className={s.data}>
              <div>
                <h2 className={s.title}>Mamurjon kitob</h2>
                <p className={s.text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio, repellendus laborum voluptatem ad quibusdam veniam
                  aspernatur velit at omnis ipsum.
                </p>
              </div>
              <div>
                <p className={s.about}>12-03-2004 | fantastika | English</p>
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
      </div>
    </div>
  );
}
