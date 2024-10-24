import { useEffect, useState } from 'react';
import { useFetchItemDetail } from '../services and helpers/fetchItem';
// import { usePokeItemDetail } from '../context/PokeItemContext';
import PropTypes from 'prop-types';

import ItemCard from './itemCard';

import './itemSection.css';
import '../../css/global.css';

export default function ItemSection() {
  const pokeItemDetail = useFetchItemDetail();

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {Object.values(pokeItemDetail).map((item) => {
            return <ItemCard item={item} key={item.id} className='itemCard' />;
          })}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  pokeItemDetail: PropTypes.object,
};
