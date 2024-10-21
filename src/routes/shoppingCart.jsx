import { useShoppingCart } from './context/ShoppingCartContext';
// import { Offcanvas } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function ShoppingCart(isOpen) {
  const { closeCart } = useShoppingCart();
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like,
          text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
