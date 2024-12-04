import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext.jsx";
//import "./Shopping.css";

import ProductCard from "./ProductCard.jsx";

const sampleProducts = [
  {
    id: 1,
    title: "The Settlers of Catan",
    price: 69.99,
    image:
      "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
  },
  {
    id: 2,
    title: "Pandemic",
    price: 49.99,
    image:
      "https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__itemrep/img/wAMLbgihOl7dJDHnvqt7OXKEV-4=/fit-in/246x300/filters:strip_icc()/pic1534148.jpg",
  },
  {
    id: 3,
    title: "Viticulture: Essential Edition",
    price: 99.99,
    image:
      "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__itemrep/img/rfRBuKUlSgnnNpbRfy_osB9xrsM=/fit-in/246x300/filters:strip_icc()/pic6500949.jpg",
  },
  {
    id: 4,
    title: "7 Wonders",
    price: 39.99,
    image:
      "https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__itemrep/img/EUlr4of74-i75S-jIrgNfaQ3M6Q=/fit-in/246x300/filters:strip_icc()/pic7149798.jpg",
  },
];

const boardGames = [
  {
    id: 13,
    title: "The Settlers of Catan",
    price: 69.99,
  },
  {
    id: 30549,
    title: "Pandemic",
    price: 49.99,
  },
  {
    id: 183394,
    title: "Viticulture: Essential Edition",
    price: 99.99,
  },
  {
    id: 68448,
    title: "7 Wonders",
    price: 39.99,
  },
];

function Shopping() {
  const { products } = useProducts();
  console.log(products);
  return (
    <>
      <div className="shopping-container">
        <h1 style={{ margin: "16px" }}>Collection</h1>
        <p>Here are all the latest board games for you to purchase.</p>
        <div className="product-grid-container" style={gridContainerStyle}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

// Grid container styles for responsive layout
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 200px)",
  gap: "2rem",
  padding: "16px",
  margin: "16px",
  width: "100%",
  justifyContent: "center",
};

export default Shopping;
