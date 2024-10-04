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
  // const [pokeItemDetail, setPokeItemDetail] = useState([]);
  const [pokeItems] = useFetchItemName();

  // version 1
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const limit = 10;
  //     const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;
  //     // console.log(pokeItem);

  //     // fetch item name
  //     await fetch(url, { mode: 'cors' })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.results);
  //         setPokeItem(data.results);
  //       })
  //       .catch((e) => console.error(e));
  //   };

  //   fetchData();
  // }, []);

  // version 2
  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchItemName();
  //     console.log(data);
  //     setPokeItem(data);
  //     console.log(pokeItem);
  //   })();
  // }, []);

  // console.log(pokeItem);

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
