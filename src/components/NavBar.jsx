//import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function NavBar() {
  const { cart, totalItems } = useContext(CartContext);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="home-logo">
          <b>Snowy's Board Game Emporium</b>
        </Link>
        <Link to="/shopping" className="browse-link">
          Browse Collection
        </Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart" className="cart-link">
          {cart.length > 0 && ` [${totalItems()}] `}
          Cart
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
