import s from "./companyMembers.module.css";

import one from "../../img/CompanyMembers/1.jpg";
import two from "../../img/CompanyMembers/2.jpg";
import three from "../../img/CompanyMembers/3.jpg";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CompanyMembers extends Component {
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
      dots: true,
      infinite: true,
      slidesToShow: 4,
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
        <div className={"container"}>
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div>
              <img src={one} alt="one" className={s.box} />
            </div>
            <div>
              <img src={two} alt="one" className={s.box} />
            </div>
            <div>
              <img src={three} alt="one" className={s.box} />
            </div>
            <div>
              <img src={one} alt="one" className={s.box} />
            </div>
            <div>
              <img src={two} alt="one" className={s.box} />
            </div>
            <div>
              <img src={three} alt="one" className={s.box} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
