import CartItem from "./CartItem";

export default function Cart({ cart, increment, decrement }) {
  return (
    <section>
      <h2>Cart</h2>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            increment={increment}
            decrement={decrement}
          />
        );
      })}
    </section>
  );
}
