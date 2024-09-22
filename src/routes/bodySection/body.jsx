import { useEffect, useState } from 'react';

export default function Body() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokedex(data.results);
      });
  }, []);

  const pokemonList = pokedex.map((pokemon) => {
    return <li key={pokemon.name}>{pokemon.name}</li>;
  });

  console.log(pokemonList);

  return (
    <>
      <div>{<ul>{pokemonList}</ul>}</div>
    </>
  );
}
