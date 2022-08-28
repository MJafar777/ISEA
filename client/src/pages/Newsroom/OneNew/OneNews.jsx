import React from "react";
import RightSide from "../../../components/NewsLanding/Right/RightSide";
import image1 from "../../../img/News/download.jpg";
import s from "./oneNews.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetNews, GetOne } from "../../../store/newsSlice";
import NewsCard from "../NewsCard/NewsCard";

const OneNews = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOne({ id }));
    dispatch(GetNews());
  }, [id]);
  const oneNews = useSelector((store) => store.news.oneNews);
  const news = useSelector((store) => store.news.news);

  return (
    <>
      <div className="container oneNews">
        <div className={s.one}>
          <div className={s.rightSide}>
            <h1 className={s.oneTitle}>{oneNews.title}</h1>
            <div className={s.box1 + " " + s.box}>
              <img
                src={"http://localhost:8000/img/news/" + oneNews.photo}
                alt={oneNews.title}
              />
            </div>
            <div className={s.newsInfo}>
              <p>{oneNews.description}</p>
            </div>
          </div>
          <div className={s.leftSide}>
            {news.map((val, key) => (
              <NewsCard
                key={key}
                title={val.title}
                image={val.photo}
                id={val._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OneNews;
