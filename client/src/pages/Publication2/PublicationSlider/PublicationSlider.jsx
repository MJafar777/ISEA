import React from "react";

import s from "./publicationslider.module.css";

import arrow_right from "../../../img/arrow/arrow_right.svg";
import star from "../../../img/arrow/2792946_star_xmas_icon.svg";
import shack from "../../../img/shack.jpg";
import { NavLink } from "react-router-dom";

const PublicationSlider = ({
  bookImage = shack,
  mini_title = "",
  mini_title2 = "",
  description_book = "",
  id = "",
}) => {
  return (
    <div className="container">
      <div className={s.publication_card_render}>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={bookImage}
              alt="shack"
            />
            <div className={s.publication_card_content__hero1}>
              <span className={s.arrow_right}>
                <img src={arrow_right} alt="arrow_right" />
              </span>
              <h2 className={s.mini_title}>{mini_title}</h2>
              <p className={s.mini_title2}>{mini_title2}</p>

              <div className={s.star_parent}>
                <div className={s.stars_gold}>
                  <img className={s.star} src={star} alt="star" />
                  <img className={s.star} src={star} alt="star" />
                  <img className={s.star} src={star} alt="star" />
                  <img className={s.star} src={star} alt="star" />
                  <img className={s.star} src={star} alt="star" />
                </div>
                <p>5.500.000 votes</p>
                <NavLink to="/publication-books">
                  <button className={s.button}>read more</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className={s.publication_card_content_text}>
            <p className={s.description_book}>{description_book}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationSlider;
