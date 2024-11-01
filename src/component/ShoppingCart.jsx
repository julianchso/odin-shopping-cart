import { useState } from 'react';
import { useShoppingCart } from '../routes/context/ShoppingCartContext';
import { CartItemCard } from '../component/cartItems';

import { Offcanvas } from 'react-bootstrap';

import './ShoppingCart.css';
import { formatCurrency } from '../utils/formatNumber';

export function ShoppingCart(isOpen) {
  const { openCart, closeCart, cart, cartTotal } = useShoppingCart();
  console.log(cart);

  cart.map((item) => console.log(item));

  const checkout = () => {
    alert(
      `Successfully checked out ${cartTotal} worth of items! (If this were a real store it would lead to the payments page).`
    );
  };

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
      <div className='cartTotal'>Total: {cartTotal}</div>
      <button type='submit' id='checkoutBtn' onClick={checkout}>
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
