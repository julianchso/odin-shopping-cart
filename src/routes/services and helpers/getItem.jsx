import { useEffect, useState } from 'react';

export default function GetItemName() {
  const pokeItem = [];
  const [pokeItemDetail, setPokeItemDetail] = useState([]);
  const limit = 10;

  useEffect(() => {
    // fetch item name
    const url = `https://pokeapi.co/api/v2/item?limit=${limit}&offset=0`;
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < limit; i++) {
          pokeItem.push(data.results);
        }
      })
      // .then(() => {
      //   Promise.all(
      //     pokeItemUrl.map((url) =>
      //       fetch(url).then((response) =>
      //         response.json().then((data) => {
      //           console.log(data); // setPokeItemDetail();
      //         })
      //       )
      //     )
      //   );
      // })
      .catch((e) => console.error(e));
    console.log(pokeItem);
  }, []);

  // const itemList = pokeItem.map((pokeItem) => {
  //   return <li key={pokeItem.name}>{pokeItem.name}</li>;
  // });

  // return (
  //   <>
  //     <div className='gridContainer'>{<ul>{itemList}</ul>}</div>
  //   </>
  // );
}
