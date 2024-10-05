import { useEffect, useState } from 'react';
import { useFetchItemName } from '../services and helpers/fetchItem';

import Card from './card';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  useEffect(() => {
    const items = useFetchItemName();
  }, []);

  const PokeItems = async () => {
    const items = await useFetchItemName();
    console.log(items);
    return items;
  };

  const items = useFetchItemName;

  PokeItems();

  return (
    <>
      <div className='itemSection'>
        <h1>This is the item section</h1>
        <ul className='itemGridContainer'>
          <h1>This is inside the grid container</h1>
          {Object.values(items).map((item) => {
            console.log(item);
            console.log('This is the card in the item section');
            return <Card item={item} key={item.id} className='itemCard' />;
          })}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  PokeItems: PropTypes.object,
};
