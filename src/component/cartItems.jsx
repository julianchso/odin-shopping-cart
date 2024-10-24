import { useShoppingCart } from '../routes/context/ShoppingCartContext';
// import { usePokeItemDetail } from '../routes/context/PokeItemContext';
import { formatCurrency, formatUnit } from '../utils/formatCurrency';

// export function CartItemCard(name, id, quantity, imgSrc, price) {
export function CartItemCard(item) {
  const { removeFromCart, cart } = useShoppingCart();

  // const item = cart.find((item) => item.id === id);
  // console.log(item);

  if (item == null) return null;
  console.log(item);

  const totalPrice = formatCurrency(item.quantity * item.price);

  return (
    <>
      <div>{item.name}</div>
      <img src={item.img} />
      <div>{formatUnit(item.quantity)}</div>
      <div>{formatCurrency(item.price)}</div>
      <div>{totalPrice}</div>
    </>
  );
}
