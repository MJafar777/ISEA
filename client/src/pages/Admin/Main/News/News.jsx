import React, { useState, useRef } from "react";
import s from "./news.module.css";
import { useDispatch } from "react-redux";
import { GetNews, AddNews } from "../../../../store/newsSlice";

export default function News() {
  const [style, setStyle] = useState({});
  const [event, setEvent] = useState(false);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const titleRef = useRef();
  const descripRef = useRef();
  const publisherRef = useRef();
  const categoryRef = useRef();

  const clickHandler = (e) => {
    setEvent(event ? false : true);
    if (!event) {
      setStyle({ display: "grid", transform: "translateY(0)", opacity: "1" });
    } else {
      setStyle({});
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descripRef.current.value;
    const publisher = publisherRef.current.value;
    const category = categoryRef.current.value;
    dispatch(AddNews({ title, description, publisher, category, image }));
    titleRef.current.value = "";
    descripRef.current.value = "";
    publisherRef.current.value = "";
    image = "";
  };

  return (
    <div>
      <div className={s.header}>
        <h2 className={s.title}>NEWS</h2>
        <div onClick={clickHandler} className={s.plus}>
          <p to={"#addusers"}>+</p>
        </div>
      </div>
      <div className={s.input}>
        <form style={style} className={s.form}>
          <input ref={titleRef} type="text" name="title" placeholder="Title" />
          <input
            type="file"
            name="photo"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Photo"
          />
          <select name="category" ref={categoryRef} id="category">
            <option value="Articles">Articles</option>
            <option value="Presses">Presses</option>
            <option value="Experts">Experts</option>
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
          <button onClick={submitHandler}>ADD</button>
        </form>
      </div>
    </div>
  );
}
