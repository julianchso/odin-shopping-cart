import PropTypes from 'prop-types';
import { useFetchItemDetail } from '../services and helpers/fetchItem';

import '../../global.css';
import './card.css';

export default function Card({ item }) {
  return (
    <div className='card'>
      <li>
        <div className='cardName'>{item.name}</div>
        <div className='cardImg'>
          <img src={item.src} />
        </div>
        <div className='cardPrice'>{`$${item.price}`}</div>
      </li>

      <div>
        <button type='button'>-</button>
        <input type='number' />
        <button type='button'>+</button>
        <button type='button'>Add to Cart</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
