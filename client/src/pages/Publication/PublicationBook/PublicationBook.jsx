import React, { useEffect } from "react";
import s from "./publicationBook.module.css";
import Title from "../../../components/Title/Title";
import PublicationImage from "../PublicationImage/PublicationImage";
import image from "../../../img/Publications/3.jpg";
import Review from "../../../components/Review/Review";
import { GetOneBook } from "../../../store/bookSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function PublicationBook({ name, isbn }) {
  const container = s.content + " " + "container";
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOneBook({ id }));
  }, []);

  const books = useSelector((store) => store.books.books);
  const book = useSelector((store) => store.books.book);
  const status = useSelector((store) => store.books.status);

  return (
    <div className={container}>
      <div>
        <Title name={name} />
        {book && (
          <div className={s.book}>
            <div>
              <PublicationImage
                image={"http://localhost:8000/img/books/" + book.bookImage}
              />
              <p className={s.date}>{Date.now(book.createdAt)}</p>
              <form action="/" method="post">
                <button type="submit">
                  <a
                    href={
                      "http://localhost:8000/api/v1/books/download/" + book.book
                    }
                  >
                    Download
                  </a>
                </button>
              </form>
            </div>
            <div>
              <h2 className={s.title}>{book.title}</h2>
              <p className={s.text}>{book.description}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
