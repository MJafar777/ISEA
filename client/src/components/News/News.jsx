import React from "react";
import s from "./news.module.css";

import img from "../../img/New/11.avif";
const News = () => {
  return (
    <div className={s.card}>
      <div className={s.news_parent__home}>
        <div className={s.latest_news}>
          <div className={s.title}>
            <h2 className={s.first_title}>Latest News</h2>
          </div>
          <div className={s.render_news}>
            <div className={s.news_left}>
              <img className={s.news_left__img} src={img} alt="#" />
              <h4 className={s.news_left__img_title}>
                As a part of its contribution to the Climate Investment Platform
              </h4>
              <p className={s.news_left__img_content}>
                As a part of its contribution to the Climate Investment
                Platform, ISEA invites financial institutions, development
                organisations
              </p>
              <div className={s.title_data}>
                <h5>ISES Solar Energy Museum</h5>
                <h3>12/12/21</h3>
              </div>
            </div>
            <div className={s.news_left}>
              <img className={s.news_left__img} src={img} alt="#" />
              <h4 className={s.news_left__img_title}>
                As a part of its contribution to the Climate Investment Platform
              </h4>
              <p className={s.news_left__img_content}>
                As a part of its contribution to the Climate Investment
                Platform, ISEA invites financial institutions, development
                organisations
              </p>
              <div className={s.title_data}>
                <h5>ISES Solar Energy Museum</h5>
                <h3>12/12/21</h3>
              </div>
            </div>
            <div className={s.news_left}>
              <img className={s.news_left__img} src={img} alt="#" />
              <h4 className={s.news_left__img_title}>
                As a part of its contribution to the Climate Investment Platform
              </h4>
              <p className={s.news_left__img_content}>
                As a part of its contribution to the Climate Investment
                Platform, ISEA invites financial institutions, development
                organisations
              </p>
              <div className={s.title_data}>
                <h5>ISES Solar Energy Museum</h5>
                <h3>12/12/21</h3>
              </div>
            </div>
            <div className={s.news_left}>
              <img className={s.news_left__img} src={img} alt="#" />
              <h4 className={s.news_left__img_title}>
                As a part of its contribution to the Climate Investment Platform
              </h4>
              <p className={s.news_left__img_content}>
                As a part of its contribution to the Climate Investment
                Platform, ISEA invites financial institutions, development
                organisations
              </p>
              <div className={s.title_data}>
                <h5>ISES Solar Energy Museum</h5>
                <h3>12/12/21</h3>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className={s.popular_news}>
          <div className={s.title}>
            <h2 className={s.first_title}>Popular News</h2>
          </div>
          <div className={s.render_popular_news}>
            <div className={s.popular_news_card}>
              <div className={s.popular_news_card__left}>
                <img className={s.popular_news__img} src={img} alt="#" />
              </div>
              <div className={s.popular_news_card__right}>
                <h4 className={s.popular_news_card__right_title}>
                  The main purpose of the activity: training and retraining of
                  personnel
                </h4>
                <p className={s.popular_news_card__right_text}>
                  supporting the effective use of advanced technologies in the
                  field of solar energy.
                </p>
                <div className={s.title_data}>
                  <h5>ISES Solar Energy Museum</h5>
                  <h3 className={s.date}>12/12/21</h3>
                </div>
              </div>
            </div>
            <div className={s.popular_news_card}>
              <div className={s.popular_news_card__left}>
                <img className={s.popular_news__img} src={img} alt="#" />
              </div>
              <div className={s.popular_news_card__right}>
                <h4 className={s.popular_news_card__right_title}>
                  The main purpose of the activity: training and retraining of
                  personnel
                </h4>
                <p className={s.popular_news_card__right_text}>
                  supporting the effective use of advanced technologies in the
                  field of solar energy.
                </p>
                <div className={s.title_data}>
                  <h5>ISES Solar Energy Museum</h5>
                  <h3 className={s.date}>12/12/21</h3>
                </div>
              </div>
            </div>
            <div className={s.popular_news_card}>
              <div className={s.popular_news_card__left}>
                <img className={s.popular_news__img} src={img} alt="#" />
              </div>
              <div className={s.popular_news_card__right}>
                <h4 className={s.popular_news_card__right_title}>
                  The main purpose of the activity: training and retraining of
                  personnel
                </h4>
                <p className={s.popular_news_card__right_text}>
                  supporting the effective use of advanced technologies in the
                  field of solar energy.
                </p>
                <div className={s.title_data}>
                  <h5>ISES Solar Energy Museum</h5>
                  <h3 className={s.date}>12/12/21</h3>
                </div>
              </div>
            </div>
            <div className={s.popular_news_card}>
              <div className={s.popular_news_card__left}>
                <img className={s.popular_news__img} src={img} alt="#" />
              </div>
              <div className={s.popular_news_card__right}>
                <h4 className={s.popular_news_card__right_title}>
                  The main purpose of the activity: training and retraining of
                  personnel
                </h4>
                <p className={s.popular_news_card__right_text}>
                  supporting the effective use of advanced technologies in the
                  field of solar energy.
                </p>
                <div className={s.title_data}>
                  <h5>ISES Solar Energy Museum</h5>
                  <h3 className={s.date}>12/12/21</h3>
                </div>
              </div>
            </div>
            <div className={s.popular_news_card}>
              <div className={s.popular_news_card__left}>
                <img className={s.popular_news__img} src={img} alt="#" />
              </div>
              <div className={s.popular_news_card__right}>
                <h4 className={s.popular_news_card__right_title}>
                  The main purpose of the activity: training and retraining of
                  personnel
                </h4>
                <p className={s.popular_news_card__right_text}>
                  supporting the effective use of advanced technologies in the
                  field of solar energy.
                </p>
                <div className={s.title_data}>
                  <h5>ISES Solar Energy Museum</h5>
                  <h3 className={s.date}>12/12/21</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
