import PropTypes from 'prop-types';
import { useFetchItemDetail } from '../services and helpers/fetchItem';
import { useState } from 'react';

import '../../global.css';
import './card.css';
import { useSearchParams } from 'react-router-dom';

export default function Card({ item }) {
  // const Quantity = () => {
  //   const [qty, setQty] = useState(0);

  //   decrementQty = () => {
  //     if (qty <= 0) {
  //       setQty(0);
  //     } else {
  //       setQty(qty - 1);
  //     }
  //   };

  //   incrementQty = () => {
  //     setQty(qty + 1);
  //   };

  //   function onChange(e) {
  //     const val = e.target.value;

  //     return val <= 0 ? setQty(0) : setQty(val);
  //   }
  // };

  return (
    <div className='cardCtn'>
      <div className='cardName center'>{item.name}</div>
      <div className='cardImg center'>
        <img className='center' src={item.src} />
      </div>
      <div className='cardPrice center'>{`$${item.price}`}</div>

      <div className='inputQtyCtn'>
        <button type='button'>-</button>
        {/* <button type='button' onClick={this.decrementQty}>
          -
        </button> */}
        <input className='inputQty' type='number' />
        <button type='button'>+</button>
        {/* <button type='button' onClick={this.incrementQty}>
          +
        </button> */}
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
