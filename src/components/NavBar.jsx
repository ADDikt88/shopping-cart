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
        <div className="navbar-content">
          <Link to="/" className="home-logo">
            Snowy's Board Game Emporium
          </Link>
          <Link to="/shopping" className="browse-link">
            Browse Collection
          </Link>
          <Link to="/contact" className="contact-link">
            Contact Us
          </Link>
          <Link to="/cart" className="cart-link">
            {cart.length > 0 && ` [${totalItems()}] `}
            Cart
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
