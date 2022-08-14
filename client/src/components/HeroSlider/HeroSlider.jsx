import React, { useState, useEffect } from "react";
import {} from "react-icons";
import slider from "./slider-data";
import s from "./heroslider.module.css";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slider.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    console.log(slideLength, currentSlide);
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className={s.slider}>
      {slider.map((slide, index) => {
        return (
          <div
            className={
              currentSlide === index ? s.current + " " + s.slide : s.slide
            }
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt={slide.title} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HeroSlider;
