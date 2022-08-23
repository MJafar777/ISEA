import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import s from "./newsroom.module.css";

export default function Newsroom() {
  return (
    <>
      <div className="container">
        <div className={s.big}>
          <div className={s.left_side}>
            <NewsCard />
          </div>
          <div className={s.right_side}>
            <h2>This is right side</h2>
          </div>
        </div>
      </div>
    </>
  );
}
