import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const removeFromCart = (itemToRemove) => {};

  const addToCart = (plant) => {};

  const value = {
    cart,
    removeFromCart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw Error("useCart must be used within a CartProvider");
  }
  return context;
}
