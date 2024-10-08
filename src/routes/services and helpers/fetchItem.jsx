import { useState, useEffect } from 'react';
import { POKE_API_URL_BASE, POKE_API_LIMIT, POKE_API_OFFSET } from '../../configs/config.js';

// custom hook for fetching item name
const useFetchItemName = () => {
  const [pokeItem, setPokeItem] = useState([]);

  const url = `${POKE_API_URL_BASE}?limit=${POKE_API_LIMIT}&offset=${POKE_API_OFFSET}`;

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokeItem(data.results);
      });
  }, [url]);

  return pokeItem;
};

const useFetchItemDetail = () => {
  const [pokeItemDetail, setPokeItemDetail] = useState([]);
  const pokeItemDetailURL = [];

  function pokeItemDetailURLTemp() {
    for (let i = 1; i < POKE_API_LIMIT; i++) {
      pokeItemDetailURL.push(`${POKE_API_URL_BASE}/${i}`);
    }
    // console.log(pokeItemDetailURL);
    return pokeItemDetailURL;
  }

  pokeItemDetailURLTemp();

  useEffect(() => {
    Promise.all(
      pokeItemDetailURL.map((url) => {
        return fetch(url, { mode: 'cors' })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setPokeItemDetail([...pokeItemDetail, data]);
            console.log(pokeItemDetail);
          });
      })
    );
  }, []);

  console.log(pokeItemDetail);
  return pokeItemDetail;
  // const url = `${POKE_API_URL_BASE}/${id}`;
};

export { useFetchItemName, useFetchItemDetail };
