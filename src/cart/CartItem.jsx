export default function CartItem({ item, increment, decrement }) {
  return (
    <section>
      <p>
        {item.image} {item.name}
      </p>
      <p>Quantity: {item.quantity}</p>
      <div>
        <button onClick={() => decrement(item.id)}>-</button>
        <button onClick={() => increment(item.id)}>+</button>
      </div>
    </section>
  );
}
