import { useEffect, useState } from 'react';

export default function GetItemName() {
  const [pokeItem, setPokeItem] = useState([]);

  useEffect(() => {
    // fetch pokemon name
    const url = 'https://pokeapi.co/api/v2/item?limit=150&offset=0';
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokeItem(data.results);
        console.log(data.results);
      });
  }, []);

  const itemList = pokeItem.map((pokeItem) => {
    return <li key={pokeItem.name}>{pokeItem.name}</li>;
  });

  return (
    <>
      <div className='gridContainer'>{<ul>{itemList}</ul>}</div>
    </>
  );
}
