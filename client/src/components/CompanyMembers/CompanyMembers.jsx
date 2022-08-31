// import React, { Component } from "react";

// import Title from "../Title/Title";
import s from "./companyMembers.module.css";

import one from "../../img/CompanyMembers/1.jpg";
import two from "../../img/CompanyMembers/2.jpg";
import three from "../../img/CompanyMembers/3.jpg";

// import left from "../../img/icons/left_icon.svg";
// import right from "../../img/icons/right_icon.svg";

// const CompanyMembers = () => {
//   return (
//     <div className="container">
//       <Title name={"Company Members"} />
//       <div className={s.parentContainer}>
//         <img className={s.control_Slider} src={left} alt="left" />
//         <div className={s.slider}>
//           <img className={s.slayd} src={one} alt="one" />
//           <img className={s.slayd} src={two} alt="two" />
//           <img className={s.slayd} src={three} alt="three" />
//           <img className={s.slayd} src={one} alt="one" />
//           <img className={s.slayd} src={two} alt="two" />
//           <img className={s.slayd} src={three} alt="three" />
//           <img className={s.slayd} src={one} alt="one" />
//           <img className={s.slayd} src={two} alt="two" />
//           <img className={s.slayd} src={three} alt="three" />
//           <img className={s.slayd} src={one} alt="one" />
//           <img className={s.slayd} src={two} alt="two" />
//           <img className={s.slayd} src={three} alt="three" />
//         </div>
//         <img className={s.control_Slider} src={right} alt="right" />
//       </div>
//     </div>
//   );
// };

// export default CompanyMembers;

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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
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
