import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import React from "react";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
