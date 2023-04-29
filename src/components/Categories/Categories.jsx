import React from "react";
import "./Categories.scss";
import { categories } from "../../DummyData";
import Carousel from "react-bootstrap/Carousel";

const Categories = () => {
  return (
    // <div className="category_section-container">
    //   <div className="category_section-header">
    //     <h1>Categories</h1>
    //     <a href="#null">more</a>
    //   </div>
    //   <div className="category_section">
    //     {categories.map((category, index) => (
    //       <div className="category_section-card" key={index}>
    //         <img src={category.img} alt={category.name} />
    //         <p>{category.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="category_section-container">
      <Carousel>
        {categories.map((category) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={category.img}
              alt={category.name}
              style={{ height: "90dvh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{category.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
