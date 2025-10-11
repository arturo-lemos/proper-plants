import { useState } from "react";
import PLANTS from "./data";
//components
import PlantList from "./plants/PlantList";
import Cart from "./cart/Cart";
//styles
import "./app.css";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === plant.id);
      if (exists) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };
  return (
    <>
      <h1>Proper Plants</h1>
      <main className="plantShop">
        <PlantList items={plants} addToCart={addToCart} />
        <Cart cart={cart} increment={increment} decrement={decrement} />
      </main>
    </>
  );
}
