import React, { useRef } from "react";
import "./Categories.scss";
import { categories, topSavers } from "../../../DummyData";
import Carousel from "react-bootstrap/Carousel";
import Card3 from "../../Product Cards/Card3";
import Card1 from "../../Product Cards/Card1";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const scroll = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
  };
  const scrolla = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div className="category_section-container">
        <div className="category-header">
          <h2>Browse by Category</h2> <span>All Categories</span>
        </div>
        <div className="category-items slider-button" ref={ref1}>
          <button
            className="scroll-btn1 align-items-center border-0 btn btn-dark justify-content-center rounded-circle text-white"
            onClick={() => scroll(-650)}
          >
            <IoIosArrowBack size={28} />
          </button>
          {categories.map(({ name, img }) => {
            return <Card3 key={name} category={name} img={img} />;
          })}
          <button
            className="align-items-center border-0 btn btn-dark justify-content-center rounded-circle text-white scroll-btn2 "
            onClick={() => scroll(650)}
          >
            <IoIosArrowForward size={28} />
          </button>
        </div>
      </div>
      <div className="category_section-container">
        <div className="category-header">
          <h2>Top Saver</h2> <span>All Categories</span>
        </div>
        <div className="category-items  slider-button " ref={ref2}>
          <button
            className="scroll-btn1 align-items-center border-0 btn btn-dark justify-content-center rounded-circle text-white"
            onClick={() => scrolla(-650)}
          >
            <IoIosArrowForward />
          </button>

          {topSavers.map(
            ({
              img,
              multiplier,
              itemName,
              initPrice,
              category,
              price,
              available,
            }) => (
              <Card1
                key={initPrice}
                img={img}
                multiplier={multiplier}
                itemName={itemName}
                initPrice={initPrice}
                price={price}
                category={category}
                available={available}
              />
            )
          )}
          <button
            className="scroll-btn2 align-items-center border-0 btn btn-dark justify-content-center rounded-circle text-white"
            onClick={() => scrolla(650)}
          >
            <IoIosArrowBack />
          </button>
        </div>
      </div>
      <div className="category_section-container">
        <div className="category-header">
          <h2>Top Saver</h2> <span>All Categories</span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Categories;

{
  /* <div className="category_section-container">
      <div className="category_section-header">
        <h1>Categories</h1>
        <a href="#null">more</a>
      </div>
      <div className="category_section">
        {categories.map((category, index) => (
          <div className="category_section-card" key={index}>
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
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
            </Carousel> */
}
