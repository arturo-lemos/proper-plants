import "./plants.css";

export default function PlantCard({ plantCard, addToCart }) {
  return (
    <section>
      <figure className="plantImage">{plantCard.image}</figure>
      <h3>{plantCard.name}</h3>
      <button onClick={() => addToCart(plantCard)}>Add to cart</button>
    </section>
  );
}
