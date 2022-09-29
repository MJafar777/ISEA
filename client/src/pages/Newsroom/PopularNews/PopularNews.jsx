import s from "./popularnews.module.css";

import img11 from "../NewsCard/22.avif";
import img22 from "../NewsCard/22.avif";
import img33 from "../NewsCard/22.avif";
import img44 from "../NewsCard/22.avif";
import img55 from "../NewsCard/22.avif";
import img66 from "../NewsCard/22.avif";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../components/Title/Title";
import NewsCard from "../NewsCard/NewsCard";

export default class PopularNews extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {

    const settings = {
      
      dots: false,
      infinite: true,
      slidesToShow: 5,
      
      slidesToScroll: 1,
      autoplay: true,
      
      autoplaySpeed: 2000,
      responsive: [
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
    return (
      <div className={s.big}>
        <div >
          <div className={s.title}>
            <Title name={"Popular"} />
          </div>
          <Slider
            className={s.boxParent}
            ref={(slider) => (this.slider = slider)}
            {...settings}
          >
          
            <img src={img11} alt="one" className={s.box} />
            <img src={img22} alt="one" className={s.box} />
            <img src={img55} alt="one" className={s.box} />
            <img src={img33} alt="one" className={s.box} />
            <img src={img44} alt="one" className={s.box} />
            <img src={img66} alt="one" className={s.box} />
          </Slider>
        </div>
      </div>
    );
  }
}
