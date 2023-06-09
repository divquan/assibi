import React from "react";
import "./HeroSection.scss";
import image from "../../assets/fruits.jpg";
const HeroSection1 = () => {
  return (
    <div className="hero_section-container">
      <div className="hero_section_uno">
        <img src={image} alt="" />
        <div>
          <h2>assibi Food Takeaway</h2>W
          <p>New arrivals. Natural ruit juice milk etc. Essential for winter</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
