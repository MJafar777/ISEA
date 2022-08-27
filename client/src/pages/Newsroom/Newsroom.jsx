import React from "react";
import s from "./newsroom.module.css";

import image1 from "../../img/News/download.jpg";

export default function Newsroom() {
  return (
    <div className="container">
      <div className={s.news}>
        <div className={s.box1 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="news/1">
            <div className={s.bottom}>
              <div className={s.text}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>
        </div>
        <div className={s.box2 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="#">
            <div className={s.bottom}>
              <div className={s.text1}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle1}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>{" "}
        </div>
        <div className={s.box2 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="#">
            <div className={s.bottom}>
              <div className={s.text1}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle1}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>{" "}
        </div>
        <div className={s.box2 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="#">
            <div className={s.bottom}>
              <div className={s.text1}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle1}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>
        </div>
        <div className={s.box2 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="#">
            <div className={s.bottom}>
              <div className={s.text1}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle1}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>{" "}
        </div>
        <div className={s.box2 + " " + s.box}>
          <img src={image1} alt="" />
          <a href="#">
            <div className={s.bottom}>
              <div className={s.text1}>
                <p>22:10 18.05.2022</p>
              </div>
              <div className={s.subTitle1}>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam voluptas, quidem amet ut corporis.
                </h1>
              </div>
            </div>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
