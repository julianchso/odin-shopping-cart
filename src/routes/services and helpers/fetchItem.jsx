import { useState, useEffect } from 'react';

// custom hook for fetching item name
const useFetchItemName = () => {
  const [pokeItem, setPokeItem] = useState([]);

  const limit = 2;
  const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokeItem(data.results);
      });
  }, [url]);

  return pokeItem;
};

const useFetchItemDetail = async (itemName) => {
  const url = `https://pokeapi.co/api/v2/item/${itemName}`;

  await fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.log(e));
};

export { useFetchItemName, useFetchItemDetail };
