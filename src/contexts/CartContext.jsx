import { createContext, useState } from "react";

//Create cart context
export const CartContext = createContext();

//Create cart provider which can access the Cart Context
//You will wrap the app in this function, so all its children will have access to 'value'
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      //Check if existing product, returns a boolean
      const existingProduct = prevCart.find((item) => item.id == product.id);

      if (existingProduct) {
        //Use map if editing an existing list to return a list of same size
        return prevCart.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        //Add quantity to product
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    //Use filter to remove an item
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function totalCost() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function totalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    totalCost,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
