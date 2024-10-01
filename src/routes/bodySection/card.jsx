import PropTypes from 'prop-types';
import { FetchItemDetail } from '../services and helpers/fetchItem';

import '../../global.css';
import './card.css';

export default function Card({ item }) {
  // const name = item.name;

  const itemDetail = FetchItemDetail(item);

  console.log(itemDetail);

  return (
    <button>
      <li>
        {/* <div className='cardImg'>{itemDetail.sprites.default}</div> */}
        <div className='cardName'>{itemDetail.name}</div>
        <div className='cardPrice'>{itemDetail.cost}</div>
      </li>
    </button>
  );
}

Card.propTypes = {
  item: PropTypes.string,
};
