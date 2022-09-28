import React, { useEffect } from "react";

import Title from "../Title/Title";
import LeftSide from "./Left/LeftSide";
import s from "./NewsLanding.module.css";
import RightSide from "./Right/RightSide";
import { useDispatch, useSelector } from "react-redux";
import { GetNews } from "../../store/newsSlice";

export default function NewsLanding() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetNews());
  }, []);

  const news = useSelector((store) => store.news.news);

  return (
    <div className={s.container}>
      <Title name="Latest News" />
      <div className={s.main}>
        <LeftSide
          id={news[0]?._id}
          image={"http://localhost:8000/img/news/" + news[0]?.photo}
          title={news[0]?.title}
          text={news[0]?.description}
          date={"12-03-2021"}
        />
        <div className={s.right}>
          {news.map((val, key) => {
            if (key > 0 && key < 4) {
              return (
                <RightSide
                  id={val._id}
                  title={val.title}
                  image={"http://localhost:8000/img/news/" + val.photo}
                  date={val.createdAt}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
