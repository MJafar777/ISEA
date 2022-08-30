import React from "react";
import Title from "../Title/Title";
import Card from "./Card/Card";
import s from "./publicationLanding.module.css";
import { useSelector } from "react-redux";
export default function PublicationLanding() {
  const books = useSelector((store) => store.books.books);

  return (
    <div className={s.background}>
      <div className="container">
        <Title name="Recent Rublications" />
        <div className={s.container}>
          {books.map((val, key) => {
            if (key <= 3) {
              return (
                <Card
                  key={key}
                  image={"http://localhost:8000/img/books/" + val.bookImage}
                  title={val.title}
                  id={val._id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
