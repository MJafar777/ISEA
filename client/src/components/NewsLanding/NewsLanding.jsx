import React from "react";
import Title from "../Title/Title";
import LeftSide from "./Left/LeftSide";
import s from "./NewsLanding.module.css";
import RightSide from "./Right/RightSide";
import image from "../../img/New/1.jpg";
import image1 from "../../img/New/2.png";
import image2 from "../../img/New/3.jpg";
import image3 from "../../img/New/4.jpg";
import image4 from "../../img/New/5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
                  date={"12-04-2022"}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
