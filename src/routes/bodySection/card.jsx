import PropTypes from 'prop-types';
import { useFetchItemDetail } from '../services and helpers/fetchItem';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import '../../global.css';
import './card.css';

export default function Card({ item }) {
  const [qty, setQty] = useState(0);

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

  function changeQty(e) {
    const val = Number(e.target.value);
    return val <= 0 ? setQty(0) : setQty(val);
  }

  return (
    <div className='cardCtn'>
      <div className='cardName center'>{item.name}</div>
      <div className='cardImg center'>
        <img className='center' src={item.src} />
      </div>
      <div className='cardPrice center'>{`$${item.price}`}</div>

      <div className='inputQtyCtn'>
        <button type='button' onClick={decrementQty}>
          -
        </button>
        <input className='inputQty' type='number' onChange={(e) => changeQty(e)} value={qty} />
        <button type='button' onClick={incrementQty}>
          +
        </button>
      </div>
      <button type='button' className='addToCartBtn'>
        Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
