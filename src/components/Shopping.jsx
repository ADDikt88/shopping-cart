import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoardGameDetails = async () => {
      try {
        const updatedProducts = await Promise.all(
          boardGames.map(async (game) => {
            // Fetch data for each game by ID (adjust API endpoint as needed)
            const response = await fetch(
              `https://boardgamegeek.com/xmlapi2/thing?id=${game.id}`
            );
            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "text/xml");
            const item = xml.querySelector("item");

            // Pull only the fields you need from the API response
            const name =
              item.querySelector("name")?.getAttribute("value") ||
              "Unknown Game";
            const image =
              item.querySelector("image")?.textContent ||
              "https://via.placeholder.com/150";
            const description =
              item.querySelector("description")?.textContent ||
              "No description available.";
            const playingTime =
              item.querySelector("playingtime")?.getAttribute("value") ||
              "Unknown Playing Time";
            const minplayers =
              item.querySelector("minplayers")?.getAttribute("value") || "1";
            const maxplayers =
              item.querySelector("maxplayers")?.getAttribute("value") || "Many";
            const playerCount = `${minplayers} to ${maxplayers}`;

            // Merge custom price with API data
            return {
              id: game.id,
              title: game.title,
              name,
              image,
              description,
              playingTime,
              playerCount,
              price: game.price,
            };
          })
        );

        setProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching board game data:", error);
        setLoading(false);
      }
    };

    fetchBoardGameDetails();
  }, []);

  return (
    <>
      <div className="main-container">
        <h1>Collection</h1>
        <p>Here are all the latest board games for you to purchase.</p>
        <div className="product-grid-container" style={gridContainerStyle}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
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
};

export default Shopping;
