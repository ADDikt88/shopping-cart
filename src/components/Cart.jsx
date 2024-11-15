import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

//import "./cart.css";

function Cart() {
  const { cart, removeFromCart, totalCost } = useContext(CartContext);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.length == 0 ? (
        <p>There are no items in your cart</p>
      ) : (
        <ul style={cartListStyle}>
          {" "}
          {cart.map((product) => (
            <li key={product.id} style={cartItemStyle}>
              <img
                src={product.image}
                alt={product.title}
                width={"150px"}
                className="product-image"
              />
              <h2 className="product-title" style={{ margin: "0" }}>
                {product.title}
              </h2>
              <div style={{ margin: "auto 0 auto auto", textAlign: "right" }}>
                <p className="product-quantity">Unit Price: {product.price}</p>
                <p className="product-quantity">Quantity: {product.quantity}</p>
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
          <div style={{ border: "1px solid black", width: "100%" }}></div>
          <h2 className="total-cost" style={{ alignSelf: "flex-end" }}>
            Total: {Math.ceil(totalCost() * 100) / 100}
          </h2>
          <button
            onClick={() => alert("This is a fake store!")}
            style={checkoutButtonStyle}
          >
            Checkout
          </button>
        </ul>
      )}
    </>
  );
}

const cartItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  width: "100%",
};

const cartListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "80%",
};

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
