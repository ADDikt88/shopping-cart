import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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

    const fetchBoardGameInfo = async () => {
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
      } catch (error) {
        console.error("Error fetching board game data:", error);
      }
    };

    fetchBoardGameInfo();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
