import React from "react";
import s from "./newsroom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetNews } from "../../store/newsSlice";
import NewsCard from "./NewsCard/NewsCard";

export default function Newsroom() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetNews());
  }, []);

  const news = useSelector((store) => store.news.news);

  return (
    <div className="container">
      <div className={s.news}>
        {news && (
          <div className={s.box1 + " " + s.box}>
            <img
              src={"http://localhost:8000/img/news/" + news[0]?.photo}
              alt={news[0]?.title}
            />
            <a href="news/1">
              <div className={s.bottom}>
                <div className={s.text}>
                  <p>J22:10 18.05.2022</p>
                </div>
                <div className={s.subTitle}>
                  <h1>{news[0]?.title}</h1>
                </div>
              </div>
            </a>
          </div>
        )}
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
  );
}
