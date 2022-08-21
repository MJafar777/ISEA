import React, { useEffect } from "react";
import Title from "../Title/Title";
import Card from "./Card/Card";
import s from "./publicationLanding.module.css";
import image1 from "../../img/Publications/1.jpg";
import image2 from "../../img/Publications/2.jpg";
import image3 from "../../img/Publications/3.jpg";
import image4 from "../../img/Publications/4.jpg";
import { useSelector } from "react-redux";
export default function PublicationLanding() {
  const books = useSelector((store) => store.books.books);
  console.log(books);
  return (
    <div className={s.background}>
      <div className="container">
        <Title name="Recent Rublications" />
        <div className={s.container}>
          {books.map((val, key) => {
            if (key <= 3) {
              return <Card image={image1} title={val.title} id={val._id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
