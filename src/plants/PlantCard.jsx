import "./plants.css";

export default function PlantCard({ plantCard }) {
  return (
    <section>
      <figure className="plantImage">{plantCard.image}</figure>
      <h3>{plantCard.name}</h3>
      <button>Add to cart</button>
    </section>
  );
}
