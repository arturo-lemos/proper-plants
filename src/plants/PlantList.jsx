import PlantCard from "./PlantCard";

export default function PlantList({ items, addToCart }) {
  return (
    <section>
      <h2>Plants</h2>
      {items.map((item) => {
        return (
          <PlantCard key={item.id} plantCard={item} addToCart={addToCart} />
        );
      })}
    </section>
  );
}
