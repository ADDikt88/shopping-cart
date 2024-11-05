import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./homepage.css";
import NavBar from "./components/NavBar";

function Homepage() {
  return (
    <>
      <NavBar />
      <div>___</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ultimate Board Game Emporium</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/shopping">
        <button>Shop Now</button>
      </Link>
    </>
  );
}

export default Homepage;
