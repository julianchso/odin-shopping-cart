import { useEffect, useState } from 'react';
import Card from './card';

import './body.css';

export default function Body() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // fetch pokemon name
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPokedex(data.results);
      });
  }, []);

  const pokemonList = pokedex.map((pokemon) => {
    return <li key={pokemon.name}>{pokemon.name}</li>;
  });

  return (
    <>
      <div className='gridContainer'>{<ul>{pokemonList}</ul>}</div>
    </>
  );
}
