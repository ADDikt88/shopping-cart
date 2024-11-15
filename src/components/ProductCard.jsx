import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  //use cart context to add item
  const { addToCart } = useContext(CartContext);

  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdding(true);

    // Reset the button after 1 second
    setTimeout(() => {
      setIsAdding(false);
    }, 1300);
  };

  return (
    <>
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          width={"150px"}
          className="product-image"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{product.price}</p>
        <button
          className={`addToCartButton ${isAdding ? "addedToCart" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? "Added to Cart!" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
