import { useState, useEffect } from 'react';

// custom hook for fetching item name
const useFetchItemName = () => {
  const [pokeItem, setPokeItem] = useState([]);

  const limit = 10;
  const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokeItem(data.results);
      });
  }, [url]);

  console.log([pokeItem]);
  return [pokeItem];
};

const fetchItemName = async () => {
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;
  // console.log(pokeItem);
  let pokeItems = [];

  // fetch item name
  await fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      pokeItems = data.results;
    })
    .catch((e) => console.error(e));

  return pokeItems;
};

const fetchItemDetail = async (itemName) => {
  const url = `https://pokeapi.co/api/v2/item/${itemName}`;

  await fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.log(e));
};

export { fetchItemName, fetchItemDetail, useFetchItemName };
