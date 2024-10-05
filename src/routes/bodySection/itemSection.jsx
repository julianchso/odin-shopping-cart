import { useEffect, useState } from 'react';
import {
  fetchItemName,
  fetchItemDetail,
  useFetchItemName,
} from '../services and helpers/fetchItem';

import Card from './card';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  const getItems = async () => {
    const items = await FetchItemName();
    console.log(typeof items);
    console.log(items);
    return items;
  };

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {pokeItems &&
            Object.values(pokeItems).map((item) => {
              console.log(item);
              return <Card item={item} key={item.id} className='itemCard' />;
            })}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  item: PropTypes.object,
};
