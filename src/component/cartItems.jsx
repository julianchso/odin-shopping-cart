import { useShoppingCart } from '../routes/context/ShoppingCartContext';
// import { usePokeItemDetail } from '../routes/context/PokeItemContext';
import { formatCurrency, formatUnit } from '../utils/formatNumber';

// export function CartItemCard(name, id, quantity, imgSrc, price) {
export function CartItemCard(item) {
  const { removeFromCart, cart } = useShoppingCart();

  // const item = cart.find((item) => item.id === id);
  // console.log(item);

  if (item == null) return null;

  const totalPrice = formatCurrency(item.quantity * item.price);

  return (
    <>
      <div>
        <div>{item.name}</div>
        <div>{item.category}</div>
        <img src={item.img} />
      </div>
      <div>{formatCurrency(item.price)}</div>
      <div>{`Qty: ${formatUnit(item.quantity)}`}</div>
      <div>{totalPrice}</div>
    </>
  );
}
