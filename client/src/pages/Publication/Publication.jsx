import React, { useEffect } from "react";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";
import s from "./publication.module.css";
import PublicationCard from "./PublicationCard/PublicationCard";
import Menu from "../../components/Menu/Menu";
import Router from "../../components/Router/Router";
import PublicationImage from "./PublicationImage/PublicationImage";
import image from "../../img/Publications/2.avif";
import { useDispatch, useSelector } from "react-redux";
import { BooksGet } from "../../store/bookSlice";
import Loading from "../../components/Loading/Loading";

export default function Publication() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BooksGet());
  }, []);
  const books = useSelector((store) => store.books.books);
  const status = useSelector((store) => store.books.status);
  console.log(status);
  return (
    <div className="container">
      {status === "resolved" ? (
        <>
          <Search placeholder={"search publications"} />
          <Title name={"Latest Publications"} />
          <div className={s.latest}>
            {books?.map((val, key) => {
              if (key < 2) {
                return (
                  <PublicationCard
                    key={key}
                    title={val.title}
                    category={val.category}
                    sub_title={val.sub_description}
                    language={val.language}
                    image={val.bookImage}
                    id={val._id}
                  />
                );
              }
            })}
          </div>
          <Title name={"Featured Publications"} />
          <div className={s.featured}>
            <PublicationCard
              title={books[0].title}
              category={books[0].category}
              sub_title={books[0].sub_description}
              language={books[0].language}
              image={books[0].bookImage}
              id={books[0]._id}
            />
            <Menu title={"Browse by topic"}>
              <Router route={"/benefits"} name={"Benefits"} />
              <Router route={"/benefits"} name={"Costs"} />
              <Router route={"/benefits"} name={"Off-grid of energy"} />
              <Router route={"/benefits"} name={"Energy Transition"} />
              <Router route={"/benefits"} name={"Finance & Invesment"} />
              <Router route={"/benefits"} name={"See all"} />
            </Menu>
          </div>
          <Title name={"Explorer Futhers"} />
          <div className={s.futher}>
            <PublicationImage image={image} />
            <PublicationImage image={image} />
            <PublicationImage image={image} />
            <PublicationImage image={image} />
            <PublicationImage image={image} />
            <PublicationImage image={image} />
          </div>
          <div className={s.all}>see all</div>
          <Title name={"Our Collections"} />
        </>
      ) : status === "loading" ? (
        <div className="load">
          <Loading
            classname={""}
            width={"80px"}
            heigth={"80px"}
            type={"spin"}
            color="#000"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
