import s from "./companyMembers.module.css";

import one from "../../img/CompanyMembers/1.jpg";
import two from "../../img/CompanyMembers/2.jpg";
import three from "../../img/CompanyMembers/3.jpg";
import img11 from "../../img/OrganisationLogos/adliyaVazirligi.png";
import img22 from "../../img/OrganisationLogos/niresUz.png";
import img33 from "../../img/OrganisationLogos/SavdoSanoatPlatasi.png";
import img44 from "../../img/OrganisationLogos/texUnver.png";
import img55 from "../../img/OrganisationLogos/uzlidep.jpg";
import img66 from "../../img/OrganisationLogos/fti.png";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Title/Title";

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
          <div className={s.title}>
            <Title name={"Our Partners"} />
          </div>
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div className={s.CompanyImgs}>
              <img src={img11} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
            <div className={s.CompanyImgs}>
              <img src={img22} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
            <div className={s.CompanyImgs}>
              <img src={img33} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
            <div className={s.CompanyImgs}>
              <img src={img44} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
            <div className={s.CompanyImgs}>
              <img src={img55} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
            <div className={s.CompanyImgs}>
              <img src={img66} alt="one" className={s.box} />
              {/* <h2>tashkilot</h2> */}
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
