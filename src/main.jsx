import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductProvider } from "./contexts/ProductContext";
import "./index.css";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import Shopping from "./components/Shopping.jsx";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Contact from "./components/Contact.jsx";
import App from "./App.jsx";
import ProductPage from "./components/ProductPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "shopping",
        element: <Shopping />,
        //loader: fetchBoardGameInfo,
      },
      {
        path: "shopping/:productId",
        element: <ProductPage />,
        //loader: fetchBoardGameInfo,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
