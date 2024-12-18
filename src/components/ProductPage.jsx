//import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext.jsx";

import "../styles/ProductPage.css";

const ProductPage = () => {
  //load product detail
  const { productId } = useParams();

  const { products, loading, error } = useProducts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [products, productId]);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <>
      <div className="product-page">
        <img
          src={product.image}
          alt={product.name}
          width={"180px"}
          className="product-image"
        />

        <h1 className="product-name">{product.name}</h1>
        <p className="product-short-description">{product.shortDesc}</p>
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
        <div style={hyperlinkStyle}>
          <Link to="/shopping">
            <h2>Continue Shopping!</h2>
          </Link>
          <Link to="/cart">
            <h2>Ready to checkout...</h2>
          </Link>
        </div>
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

const hyperlinkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
};

export default ProductPage;
