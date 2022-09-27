import React from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

import s from "./publicationPage.module.css";

import arrow_right from "../../img/arrow/arrow_right.svg";
import star from "../../img/arrow/2792946_star_xmas_icon.svg";
import shack from "../../img/shack.jpg";

const PublicationPage = () => {
  return (
    <div className="container">
      <div className={s.category}>
        <div className={s.title}>
          <h1 className={s.title_category}>Category</h1>
        </div>
        <div className={s.category_type}>
          <h3 className={s.menu_type}>All Genres</h3>
          <h3 className={s.menu_type}>Science</h3>
          <h3 className={s.menu_type}>Fiction</h3>
          <h3 className={s.menu_type}>Business</h3>
          <h3 className={s.menu_type}>Fantasy</h3>
          <h3 className={s.menu_type}>Philosophy</h3>
        </div>
      </div>
      <div className={s.publication_card_render}>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
        <div className={s.publication_card_content}>
          <div className={s.publication_card_content_img}>
            <img
              className={s.publication_card_content_img_one}
              src={shack}
              alt="shack"
            />
          </div>
          <div className={s.publication_card_content_text}>
            <span className={s.arrow_right}>
              <img src={arrow_right} alt="arrow_right" />
            </span>
            <h2 className={s.mini_title}>The Shack</h2>
            <p>by Wiliam P.Young</p>

            <div className={s.star_parent}>
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <img className={s.star} src={star} alt="star" />
              <p>5.500.000 votes</p>
            </div>
            <p>
              The noun publication comes from the Latin word publicare, meaning
              “make public.” Publication usually means something is written and
              made available publicly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
