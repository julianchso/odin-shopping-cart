import { useFetchItemDetail } from '../services and helpers/fetchItem';
import PropTypes from 'prop-types';

import ItemCard from './itemCard';

import './itemSection.css';
import '../../css/global.css';

export default function ItemSection() {
  const pokeItemDetail = useFetchItemDetail();

  return (
    <>
      <div className='pageCtn'>
        <div className='itemSection'>
          <ul className='itemGridContainer'>
            {Object.values(pokeItemDetail).map((item) => {
              return <ItemCard item={item} key={item.id} className='itemCard' />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  pokeItemDetail: PropTypes.object,
};
