
import React from "react";

export default function Carousel() {
  return (
    <div> 
      <Carousel>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src='../images/Sponsor2' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src='../images/Sponsor3' alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src='../images/Sponsor4' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
