import { useEffect, useState, useRef } from 'react';
import Card from '../bodySection/card';

export default function GetItemName() {
  const [pokeItem, setPokeItem] = useState([]);
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;

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

  // This is running ASAP. It is not waiting for the API call.
  const itemList = pokeItem.map((item) => {
    return <li key={item.name}>{item.name}</li>;
  });

  return (
    <>
      <div className='gridContainer'>{<ul>{itemList}</ul>}</div>
    </>
  );
}
