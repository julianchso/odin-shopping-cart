import { useState } from 'react';
import { useShoppingCart } from './context/ShoppingCartContext';
import { CartItemCard } from '../component/cartItems';

import Offcanvas from 'react-bootstrap/Offcanvas';

export function ShoppingCart(isOpen) {
  const { openCart, closeCart, cart } = useShoppingCart();
  console.log(cart);

  cart.map((item) => console.log(item));

  return (
    <>
      {/* <div className='offcanvas offcanvas-start' tabIndex='-1'>
        This is the Offcanvas div
        {cart.map((item) => (
          <CartItemCard key={item.id} {...item} />
        ))}
      </div> */}

      {/* <Offcanvas isOpen={isOpen} onHide={closeCart} placement={'end'}> */}
      <Offcanvas show={isOpen} onHide={closeCart} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This is the Offcanvas html element.
          {cart.map((item) => (
            <CartItemCard key={item.id} price={9999} {...item} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
