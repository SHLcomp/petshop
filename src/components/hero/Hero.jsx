import React from "react";
import "./Hero.scss";
import img from "../../assets/dog2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="txt">
        <h1>
          <span>Pet</span>
          <span>Shop</span>
        </h1>
        <div className="subtxt">
          <p>
            Pets are being abandonded and left helpless alone in harsh
            sitiuations, we're here to help fix that.
          </p>
          <a href="#quiz" className="a"><h3 className="cta">Take Quiz</h3></a>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
