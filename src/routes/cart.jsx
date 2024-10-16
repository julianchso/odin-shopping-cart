import { useState } from 'react';

import './cart.css';

export default function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>This is the cart</h1>
    </>
  );
}
