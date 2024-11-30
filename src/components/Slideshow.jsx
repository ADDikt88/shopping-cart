import { useState, useEffect } from "react";
import Slide from "./Slide.jsx";
import "../styles/Slideshow.css";

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Set delay of 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  //Next Slide
  const goNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  //Prev Slide
  const goPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="slideshow">
        <div className="slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-container ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <Slide {...slide} />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button className="prev-button" onClick={goPrevSlide}>
          &#8592;
        </button>
        <button className="next-button" onClick={goNextSlide}>
          &#8594;
        </button>

        {/* Dots for Navigation */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slideshow;
