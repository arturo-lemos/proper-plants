import PlantCard from "./PlantCard";

export default function PlantList({ items }) {
  return (
    <section>
      <h2>Plants</h2>
      {items.map((item) => {
        return <PlantCard key={item.id} plantCard={item} />;
      })}
    </section>
  );
}
