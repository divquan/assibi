import React from "react";
import { categories } from "../../DummyData";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Carousel = () => {
  return (
    <MDBCarousel showControls dealy={3000}>
      {categories.map((cat, index) => {
        return (
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={index + 1}
            src={cat.img}
            style={{ height: "30vh", objectFit: "cover" }}
            alt="..."
          >
            <h5>{cat.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>
        );
      })}
    </MDBCarousel>
  );
};

export default Carousel;
