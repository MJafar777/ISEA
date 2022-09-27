import React from "react";
import Title from "../Title/Title";
import Card from "./Card/Card";
import s from "./publicationLanding.module.css";
import { useSelector } from "react-redux";

import arrow_right from "../../img/arrow/arrow_right.svg";
import star from "../../img/arrow/2792946_star_xmas_icon.svg";
import shack from "../../img/shack.jpg";
import { NavLink } from "react-router-dom";

export default function PublicationLanding() {
  const books = useSelector((store) => store.books.books);

  return (
    <div className={s.background}>
      <div className="container">
        <Title name="Recent Publications" />

        {/* <div className={s.container}>
          {books.map((val, key) => {
            if (key <= 3) {
              return (
                <Card
                  key={key}
                  image={"http://localhost:8000/img/books/" + val.bookImage}
                  title={val.title}
                  id={val._id}
                />
              );
            }
          })}
        </div> */}

        {/* /////////////////////// */}

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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
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
                The noun publication comes from the Latin word publicare,
                meaning “make public.” Publication usually means something is
                written and made available publicly
              </p>
            </div>
          </div>
        </div>

        <div className={s.button_more}>
          <NavLink className={s.button_more_child} to="/publications">
            View More
          </NavLink>
        </div>

        {/* /////////////////////// */}
      </div>
    </div>
  );
}
