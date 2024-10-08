import PropTypes from 'prop-types';
import { fetchItemDetail } from '../services and helpers/fetchItem';

import '../../global.css';
import './card.css';

export default function Card({ item }) {
  console.log(item.name);

  return (
    <button>
      <li>
        {/* <div className='cardImg'>{itemDetail.sprites.default}</div> */}
        <div className='cardName'>{item.name}</div>
        <div className='cardPrice'>{item.cost}</div>
      </li>
    </button>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
