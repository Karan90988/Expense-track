import React from "react";
interface Props {
  cartitems: string[];
  onclear: () => void;
}
const Cart = ({ cartitems, onclear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartitems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onclear}>clear</button>
    </>
  );
};

export default Cart;
