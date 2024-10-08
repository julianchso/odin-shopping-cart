import { useEffect, useState } from 'react';
import { useFetchItemName, useFetchItemDetail } from '../services and helpers/fetchItem';
import { POKE_API_URL_BASE, POKE_API_LIMIT } from '../../configs/config';

import Card from './card';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  // const pokeItems = useFetchItemName();
  const pokeItemDetail = useFetchItemDetail();

  console.log(pokeItemDetail);

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {/* {Object.values(pokeItems).map((item) => {
            // console.log(item);
            return <Card item={item} key={item.id} className='itemCard' />;
          })} */}
          {Object.values(pokeItemDetail).map((item) => {
            // console.log(item);
            return <Card item={item} key={item.id} className='itemCard' />;
          })}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  pokeItems: PropTypes.object,
};
