"use client";
import { useState } from "react";

const Carousel = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-slide">
            {item}{" "}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-btn prev">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-btn next">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
