import React from "react";
import s from "./publicationBook.module.css";
import Title from "../../../components/Title/Title";
import PublicationImage from "../PublicationImage/PublicationImage";
import image from "../../../img/Publications/3.jpg";
import Review from "../../../components/Review/Review";
import { GetOneBook } from "../../../store/bookSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicationBook({ name, isbn }) {
  const container = s.content + " " + "container";
  const { id } = useParams();
  const books = useSelector((store) => store.books.books);
  const book = books.find((val) => val._id === id);

  return (
    <div className={container}>
      <div>
        <Title name={name} />
        <div className={s.book}>
          <div>
            <PublicationImage
              image={"http://localhost:8000/img/books/" + book.bookImage}
            />
            <p className={s.date}>{Date.now(book.createdAt)}</p>
            <form action="/" method="post">
              <button type="submit">
                <a href={"http://localhost:8000/img/books" + book.book}>
                  Download
                </a>
              </button>
            </form>
          </div>
          <div>
            <h2 className={s.title}>{book.title}</h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
              officiis tempore illo mollitia. Recusandae eos quod molestiae,
              mollitia, veniam beatae, deserunt porro doloremque in illo fugiat
              ducimus? Aliquid praesentium, eaque impedit tempore eius dicta
              tenetur sed culpa ipsum cumque porro laudantium magni ex eveniet
              maiores reprehenderit error, laborum atque!
            </p>
          </div>
        </div>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
}
