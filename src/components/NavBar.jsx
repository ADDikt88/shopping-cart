//import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="home-logo">
          Snowy's Board Game Store
        </Link>
        <Link to="/shopping" className="browse-link">
          Browse Collection
        </Link>
        <Link to="/shopping">History</Link>
        <Link to="/shopping">Contact Us</Link>
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
      </div>
    </>
  );
}

export default NavBar;
