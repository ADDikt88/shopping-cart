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
        <ul>
          {" "}
          {cart.map((product) => (
            <li key={product.id} style={cartItemStyle}>
              <img
                src={product.image}
                alt={product.title}
                width={"150px"}
                className="product-image"
              />
              <div>
                <h2 className="product-title">{product.title}</h2>
                <p className="product-quantity">Quantity: {product.quantity}</p>
                <p className="product-price-total">
                  Subtotal:{" "}
                  {Math.ceil(product.price * product.quantity * 100) / 100}
                </p>
                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <h2 className="total-cost">Total: {totalCost()}</h2>
        </ul>
      )}
    </>
  );
}

const cartItemStyle = {
  display: "flex",
  alignItems: "center",
};

export default Cart;
