//import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
const ProductPage = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(quantity);

    setIsAdding(true);

    // Reset the button after 1 second
    setTimeout(() => {
      setIsAdding(false);
    }, 1300);
  };

  /* Quantity change handlers */
  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (e) => {
    //parse integer base 10
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  return (
    <>
      <div className="product-page">
        <img
          src={product.image}
          alt={product.name}
          width={"180px"}
          className="product-image"
        />

        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="playingTime">Play Time: {product.playingTime} mins</p>
        <p className="playerCount">Player Count: {product.playerCount}</p>
        <p className="product-price">${product.price}</p>
        <div className="quantity-container" style={quantityContainerStyle}>
          <button className="button-counters" onClick={handleDecrement}>
            -
          </button>
          <input
            className="input-counter"
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min="1"
            max="99"
          />
          <button className="button-counters" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button
          className={`addToCartButton ${isAdding ? "addedToCart" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? `Added ${quantity} to Cart!` : `Add ${quantity} to Cart`}
        </button>
      </div>
    </>
  );
};

const quantityContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0",
};

export default ProductPage;
