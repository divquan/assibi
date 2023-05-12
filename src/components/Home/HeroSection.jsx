import React from "react";
import "./HeroSection.scss";
import image from "../../assets/fruits.jpg";
const HeroSection1 = () => {
  return (
    <div className="hero_section-container">
      <div className="hero_section-uno">
        <img src={image} alt="" />
        <div>
          <h2>assibi Food Takeaway</h2>
          <p>
            New arrivals. Natural fruit juice milk etc. Essential for winter
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="hero_section-duo">
        <div>
          <h1>20% sales off</h1>
          <p>Synthetic seed</p>
          <p>Net: 20 OZ</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
