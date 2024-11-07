function ProductCard({ product }) {
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
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
