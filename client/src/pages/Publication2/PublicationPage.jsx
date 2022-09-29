import React, { useState } from "react";

import s from "./publicationPage.module.css";

import Title from "../../components/Title/Title";
import { NavLink } from "react-router-dom";

import img1 from "../../img/Publications/1.avif";
import img2 from "../../img/Publications/2.avif";
import img3 from "../../img/Publications/3.avif";
import img4 from "../../img/Publications/4.avif";
import books from "../../img/Publications/books.jpg";

import Slider from "react-slick";
import PublicationSlider from "./PublicationSlider/PublicationSlider";

const PublicationPage = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     // {
  //     //   breakpoint: 1024,
  //     //   settings: {
  //     //     slidesToShow: 3,
  //     //     slidesToScroll: 3,
  //     //     infinite: true,
  //     //     dots: true,
  //     //   },
  //     // },
  //     // {
  //     //   breakpoint: 600,
  //     //   settings: {
  //     //     slidesToShow: 2,
  //     //     slidesToScroll: 2,
  //     //     initialSlide: 2,
  //     //   },
  //     // },
  //     // {
  //     //   breakpoint: 480,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //   },
  //     // },
  //   ],
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const menu_types = [
    { id: 1, name: "All Genres" },
    { id: 2, name: "Science" },
    { id: 3, name: "Fiction" },
    { id: 4, name: "Business" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Philosophy" },
  ];
  const menuType = `${s.menu_type}`;
  const menuTypeBottom = `${s.menu_type_bottom}`;
  const [isIndex, setIsIndex] = useState(1);
  const container = "container";

  return (
    <div>
      <div className={s.category + " " + container}>
        <div className={s.title}>
          <Title name="Recent Publications" />
        </div>
        <div className={s.category_type}>
          {menu_types.map((val, index) => (
            <NavLink
              to=""
              onClick={() => setIsIndex(index + 1)}
              className={isIndex === val.id ? menuTypeBottom : menuType}
            >
              {val.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={s.main}>
        <div className={s.main_hero}>
          <img className={s.main_hero} src={books} alt="books" />
        </div>
        <div className={s.main_hero_slider + " " + "container"}>
          <Slider {...settings}>
            <PublicationSlider
              bookImage={img1}
              mini_title={"The Shack"}
              mini_title2={"by Wiliam P.Young"}
              description_book={
                "The noun publication comes from the Latin word publicare,meaning make public. Publication usually means somethingis written and made available publicly"
              }
            />
            <PublicationSlider
              bookImage={img1}
              mini_title={"The Shack"}
              mini_title2={"by Wiliam P.Young"}
              description_book={
                "The noun publication comes from the Latin word publicare,meaning make public. Publication usually means somethingis written and made available publicly"
              }
            />
            <PublicationSlider
              bookImage={img1}
              mini_title={"The Shack"}
              mini_title2={"by Wiliam P.Young"}
              description_book={
                "The noun publication comes from the Latin word publicare,meaning make public. Publication usually means somethingis written and made available publicly"
              }
            />
            <PublicationSlider
              bookImage={img1}
              mini_title={"The Shack"}
              mini_title2={"by Wiliam P.Young"}
              description_book={
                "The noun publication comes from the Latin word publicare,meaning make public. Publication usually means somethingis written and made available publicly"
              }
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
