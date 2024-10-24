import { useState } from 'react';
import { useShoppingCart } from './context/ShoppingCartContext';
import { CartItemCard } from '../component/cartItems';

import { Offcanvas } from 'react-bootstrap';

export function ShoppingCart(isOpen) {
  const { openCart, closeCart, cart } = useShoppingCart();
  console.log(cart);

  cart.map((item) => console.log(item));

  return (
    <>
      <div className='cartItemCtn'>
        {cart.map((item) => (
          <CartItemCard key={item.id} {...item} />
        ))}
      </div>

      {/* <Offcanvas show={true} onHide={closeCart} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((item) => (
            <CartItemCard key={item.id} {...item} />
          ))}
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}
