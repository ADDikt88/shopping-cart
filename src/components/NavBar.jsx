//import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function NavBar() {
  const { cart, totalItems } = useContext(CartContext);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="home-logo">
          Snowy's Board Game Store
        </Link>
        <Link to="/shopping" className="browse-link">
          Browse Collection
        </Link>
        <Link to="/shopping">History</Link>
        <Link to="/shopping">Contact Us</Link>
        <Link to="/cart" className="cart-link">
          {cart.length > 0 && totalItems()} Cart
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
