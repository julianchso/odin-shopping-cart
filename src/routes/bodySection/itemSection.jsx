import { useEffect, useState } from 'react';
import { useFetchItemName } from '../services and helpers/fetchItem';

import Card from './card';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  const pokeItems = useFetchItemName();
  console.log(pokeItems);

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {Object.values(pokeItems).map((item) => {
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
