import React from "react";
import RightSide from "../../../components/NewsLanding/Right/RightSide";
import image1 from "../../../img/News/download.jpg";

import s from "./oneNews.module.css";

const OneNews = function () {
  return (
    <>
      <div className="container oneNews">
        <div className={s.one}>
          <div className={s.rightSide}>
            <h1 className={s.oneTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              earum beatae, sed quidem explicabo incidunt?
            </h1>
            <div className={s.box1 + " " + s.box}>
              <img src={image1} alt="" />
            </div>
            <div className={s.newsInfo}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                sit repellendus quibusdam. Vitae sed consequuntur repellat sequi
                ullam magnam eaque officia! Veniam, nemo. Facere pariatur
                excepturi repellendus tempore reprehenderit eius ad id eligendi
                praesentium dicta, quos doloribus. Quia deserunt excepturi quam
                fugit in molestiae debitis nesciunt ducimus, cum id blanditiis,
                eligendi, explicabo quos. Atque autem rerum maxime consectetur
                itaque obcaecati sit accusantium eaque, voluptates ratione, nemo
                magnam? Delectus, ipsam! Dolores neque a perferendis odio sequi
                doloremque aperiam ex unde porro ipsum laudantium nisi facilis
                modi quidem veniam fugit, explicabo sit non omnis in debitis.
                Exercitationem, similique animi esse doloribus, accusamus unde
                culpa incidunt at, officia alias libero! Ipsam ex, accusantium
                commodi inventore a quas perferendis maxime fuga ratione modi
                cumque ducimus corrupti omnis. Iusto modi inventore tempora unde
                velit, cum dicta nam similique vitae. Laudantium esse quis optio
                dignissimos. Natus quaerat earum nesciunt obcaecati laudantium
                vel, beatae quae asperiores saepe architecto corrupti inventore
                expedita aut quibusdam illum doloremque eveniet, itaque
                recusandae adipisci amet. Placeat minima a modi dignissimos quod
                distinctio vel, minus consectetur quas, maiores accusamus fuga
                soluta pariatur laborum voluptate. Eligendi quae incidunt aut
                expedita assumenda ullam iste voluptatum quod repellendus quas
                accusantium, omnis atque ducimus at dolorem. Quaerat, similique.
                Numquam, exps voluptatibus necessitattium obcaecati soluta esse
                enim in numquam nam maxime autem excepturi consectetur provident
                officiis? Dicta.
              </p>
            </div>
          </div>
          <div className={s.leftSide}>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneNews;
