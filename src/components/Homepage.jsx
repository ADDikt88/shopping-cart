import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import bg_slide1 from "../assets/bg_slide1.svg";
import bg_slide2 from "../assets/bg_slide2.svg";
import xmas_slide from "../assets/christmas.png";
//import "./homepage.css";
import NavBar from "./NavBar";
import Slideshow from "./Slideshow";
import "../styles/Slideshow.css";

const slides = [
  {
    image: bg_slide1,
    title: "New Arrivals",
    description:
      "Check out ALL of our latest board games added to our collection!",
  },
  {
    image: bg_slide2,
    title: "Game of the Month",
    description:
      "Discover the most popular board game this month: Viticulture!",
  },
  {
    image: xmas_slide,
    title: "Holiday Sale",
    description:
      "Get up to 50% off on selected board games this holiday season!",
  },
];

function Homepage() {
  return (
    <>
      <h1>Ultimate Board Game Emporium</h1>
      <Slideshow slides={slides} />
      <Link to="/shopping">
        <button style={shopButtonStyle}>Shop Now</button>
      </Link>
    </>
  );
}

export default Homepage;

const shopButtonStyle = {
  fontSize: "2rem",
  margin: "2rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};
