import { useState } from 'react';
import { useShoppingCart } from './context/ShoppingCartContext';
import { CartItemCard } from '../component/cartItems';

import { Offcanvas } from 'react-bootstrap';

import './ShoppingCart.css';

export function ShoppingCart(isOpen) {
  const { openCart, closeCart, cart } = useShoppingCart();
  console.log(cart);

  cart.map((item) => console.log(item));

  return (
    <>
      <div className='pageCtn'>
        <div className='cartHeader'>
          <h2>Item</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
        </div>
        <div>
          {cart.map((item) => (
            <CartItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      {/* TODO: add total */}
      <button type='submit' id='checkoutBtn'>
        <span>Checkout</span>
      </button>

      {/* TODO: Get Offcanvas to work */}
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
