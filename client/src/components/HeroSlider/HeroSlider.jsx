// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import React, { useState, useEffect } from "react";
import {} from "react-icons";
import slider from "./slider-data";
import s from "./heroslider.module.css";
  
// import img1 from "../../img/hero-Slider/1.jpg";
// import img2 from "../../img/hero-Slider/2.jpg";
// import img3 from "../../img/hero-Slider/3.jpg";
// import img4 from "../../img/hero-Slider/4.jpg";
// import img5 from "../../img/hero-Slider/5.jpg";
// import img6 from "../../img/hero-Slider/6.jpg";
// import img7 from "../../img/hero-Slider/7.jpg";
// import img8 from "../../img/hero-Slider/8.jpg";

// const AutoplaySlider = withAutoplay(AwesomeSlider);
function HeroSlider() {
  return (
    <div className={s.slider}>
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        classNames={s.AutoplaySlider}
      >
        <div className={s.sliders}>
          <img src={img1} alt="img1" />
        </div>
        <div className={s.sliders}>
          <img src={img2} alt="img2" />
        </div>
        <div className={s.sliders}>
          <img src={img3} alt="img3" />
        </div>
        <div className={s.sliders}>
          <img src={img4} alt="img4" />
        </div>
        <div className={s.sliders}>
          <img src={img5} alt="img5" />
        </div>
        <div className={s.sliders}>
          <img src={img6} alt="img6" />
        </div>
        <div className={s.sliders}>
          <img src={img7} alt="img7" />
        </div>
        <div className={s.sliders}>
          <img src={img8} alt="img8" />
        </div>
      </AutoplaySlider> */}
    </div>
  );

  /* <div className={s.current + " " + s.slide}>
    <img src={slider[0].image} alt={slider[0].title} />
  </div> */

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideLength = slider.length;

  // const autoScroll = true;
  // let slideInterval;
  // let intervalTime = 5000;

  // const nextSlide = () => {
  //   console.log(slideLength, currentSlide);
  //   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  //   console.log("next");
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  //   console.log("prev");
  // };

  // function auto() {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // }

  // useEffect(() => {
  //   setCurrentSlide(0);
  // }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide]);
}

export default HeroSlider;
