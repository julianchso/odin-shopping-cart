import { useEffect, useState } from 'react';

function FetchItemName() {
  const [pokeItem, setPokeItem] = useState([]);
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;
  // console.log(pokeItem);

  // fetch item name
  async function fetchData() {
    await fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokeItem(data.results);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return pokeItem;
}

function FetchItemDetail(itemName) {
  let pokeItemDetail = [];
  // const [pokeItemDetail, setPokeItemDetail] = useState([]);
  const url = `https://pokeapi.co/api/v2/item/${itemName}`;

  async function fetchItemPrice() {
    await fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        pokeItemDetail = data;
        console.log(pokeItemDetail);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchItemPrice();
  }, []);

  // console.log(pokeItemDetail);
  return pokeItemDetail;
}

export { FetchItemName, FetchItemDetail };
