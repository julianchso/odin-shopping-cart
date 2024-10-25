import { useShoppingCart } from '../routes/context/ShoppingCartContext';
// import { usePokeItemDetail } from '../routes/context/PokeItemContext';
import { formatCurrency, formatUnit, formatName } from '../utils/formatNumber';

import './cartItems.css';
import '../css/global.css';

export function CartItemCard(item) {
  const { removeFromCart, cart } = useShoppingCart();

  if (item == null) return null;

  const totalPrice = formatCurrency(item.quantity * item.price);
  console.log(formatName(item.category));

  return (
    <>
      <div className='cartItemCtn'>
        <img src={item.img} className='cartItemImg' />
        <div>
          <h2>{item.name}</h2>
          <h3>Category: {formatName(item.category)}</h3>
        </div>
        <div>{formatCurrency(item.price)}</div>
        <div>{formatUnit(item.quantity)}</div>
        <div>{totalPrice}</div>
        <button className='removeFromCartBtn' onClick={() => removeFromCart(item.id)}></button>
      </div>
    </>
  );
}
