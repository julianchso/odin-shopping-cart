import GetItemName from '../services and helpers/getItem';
import PropTypes from 'prop-types';

import '../../global.css';
import './card.css';

export default function Card({ item }) {
  const name = item.name;

  return (
    <button>
      <li>
        {/* <div className='cardImg'>{item.img}</div> */}
        <div className='cardName'>{name}</div>
        {/* <div className='cardPrice'>{item.price}</div> */}
      </li>
    </button>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
