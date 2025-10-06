import { useState } from "react";
import plantList from "./data";
//components
import PlantList from "./plants/PlantList";

export default function App() {
  const [plants] = useState(plantList);
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <PlantList items={plants} />
    </>
  );
}
