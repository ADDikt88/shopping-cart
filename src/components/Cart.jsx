import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import "../styles/Cart.css";

function Cart() {
  const { cart, removeFromCart, totalCost } = useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cart.length == 0 ? (
          <p>There are no items in your cart</p>
        ) : (
          <ul className="cart-list-style">
            {" "}
            {cart.map((product) => (
              <li key={product.id} className="cart-item-style">
                <div className="cart-img-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <h2 className="product-title" style={{ margin: "0" }}>
                  {product.title}
                </h2>
                <div className="product-info">
                  <p className="product-title-small">{product.title}</p>
                  <p className="product-price">Unit Price: {product.price}</p>
                  <p className="product-quantity">
                    Quantity: {product.quantity}
                  </p>
                  <h3 className="product-price-total">
                    Subtotal:{" "}
                    {Math.ceil(product.price * product.quantity * 100) / 100}
                  </h3>
                  <button
                    className="remove-from-cart-btn"
                    style={removeButtonStyle}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
            <Link
              to="/shopping"
              style={{
                alignSelf: "center",
              }}
            >
              <h2>Click to add more items!</h2>
            </Link>
            <div style={{ border: "1px solid black", width: "100%" }}></div>
            <h2
              className="total-cost"
              style={{
                alignSelf: "flex-end",
                margin: "0",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              Grand Subtotal: {Math.ceil(totalCost() * 100) / 100}
            </h2>
            <h2
              style={{
                textAlign: "right",
                alignSelf: "flex-end",
                margin: "0",
                color: "red",
              }}
            >
              50% Holiday Discount APPLIED!
            </h2>
            <h2
              className="total-cost"
              style={{ alignSelf: "flex-end", margin: "0" }}
            >
              Grand Total: {Math.ceil(totalCost() * 50) / 100}
            </h2>
            <button
              onClick={() => alert("This is a fake store!")}
              style={checkoutButtonStyle}
            >
              Checkout
            </button>
          </ul>
        )}
      </div>
    </>
  );
}

const removeButtonStyle = {
  alignSelf: "flex-end",
  marginBottom: "1rem",
  backgroundColor: "#811329",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const checkoutButtonStyle = {
  alignSelf: "flex-end",
  fontSize: "1.5rem",
  marginBottom: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default Cart;
