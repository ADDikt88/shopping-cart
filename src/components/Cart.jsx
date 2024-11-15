import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

//import "./cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

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
                <p className="product-price">{product.price}</p>
                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
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
