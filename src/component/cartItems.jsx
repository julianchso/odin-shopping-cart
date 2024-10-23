import { useShoppingCart } from '../routes/context/ShoppingCartContext';
// import { usePokeItemDetail } from '../routes/context/PokeItemContext';

// export function CartItemCard(name, id, quantity, imgSrc, price) {
export function CartItemCard(item) {
  const { removeFromCart, cart } = useShoppingCart();

  // const item = cart.find((item) => item.id === id);
  // console.log(item);

  if (item == null) return null;
  console.log('cartItem');

  const totalPrice = item.quantity * item.price;

  return (
    <>
      <div>{item.name}</div>
      <img src={item.imgSrc} />
      <div>{item.quantity}</div>
      <div>{item.price}</div>
      <div>{totalPrice}</div>
    </>
  );
}
