import React, { useEffect } from "react";
import s from "./publicationBook.module.css";
import Title from "../../../components/Title/Title";
import PublicationImage from "../PublicationImage/PublicationImage";
import Review from "../../../components/Review/Review";
import { GetOneBook } from "../../../store/bookSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";

export default function PublicationBook({ name, isbn }) {
  const container = s.content + " " + "container";
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOneBook({ id }));
  }, []);

  const book = useSelector((store) => store.books.book);
  const status = useSelector((store) => store.books.status);

  return (
    <div className={container}>
      <div>
        <Title name={name} />
        {status === "resolved" ? (
          <div className={s.book}>
            <div>
              <PublicationImage
                image={"http://localhost:8000/img/books/" + book.bookImage}
              />
              <p className={s.date}>{Date.now(book.createdAt)}</p>
              <form action="/" method="post">
                <a
                  className="btn"
                  href={
                    "http://localhost:8000/api/v1/books/download/" + book.book
                  }
                >
                  Download
                </a>
              </form>
            </div>
            <div>
              <h2 className={s.title}>{book.title}</h2>
              <p className={s.text}>{book.description}</p>
            </div>
          </div>
        ) : (
          <div className="load">
            <Loading color={"#fff"} width={"60px"} heigth={"60px"} />
          </div>
        )}
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
