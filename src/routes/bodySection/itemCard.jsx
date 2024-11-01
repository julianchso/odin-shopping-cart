import PropTypes from 'prop-types';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatNumber';

import '../../css/global.css';
import './itemCard.css';

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default function ItemCard({ item }) {
  const [qty, setQty] = useState(1);
  const { getItemQty, increaseQty, decreaseQty, addShopQtyToCart, removeFromCart } =
    useShoppingCart();

  const decrementQty = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  const incrementQty = () => {
    setQty(qty + 1);
  };

  function inputQty(e) {
    const val = Number(e.target.value);
    return val <= 0 ? setQty(0) : setQty(val);
  }

  function addToCart(item, qty) {
    addShopQtyToCart(item.name, item.id, qty, item.imgSrc, item.price, item.category.name);
    setQty(1);
  }

  return (
    <div className='cardCtn'>
      <div className='cardName center'>{item.name}</div>
      <div className='cardImg center'>
        <img className='center shopItem' src={item.imgSrc} />
      </div>
      <div className='cardPrice center'>{`${formatCurrency(item.price)}`}</div>

      <div className='inputQtyCtn'>
        <button
          type='button'
          className='changeQtyBtn changeQtyBtnDecrease'
          onClick={() => decrementQty(item.id)}
        >
          -
        </button>
        <input className='inputQty' type='number' onChange={(e) => inputQty(e)} value={qty} />
        <button
          type='button'
          className='changeQtyBtn changeQtyBtnIncrease'
          onClick={() => incrementQty(item.id)}
        >
          +
        </button>
      </div>
      <button type='button' className='addToCartBtn ' onClick={() => addToCart(item, qty)}>
        Add to Cart
      </button>
    </div>
  );
}
