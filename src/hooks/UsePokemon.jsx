// hooks/usePokemon.js
import { useState, useEffect } from 'react';

const UsePokemon = (type) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      let url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
      if (type) {
        url = `https://pokeapi.co/api/v2/type/${type}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (type) {
        setPokemon(data.pokemon.map(p => p.pokemon));
      } else {
        setPokemon(data.results);
      }
      setLoading(false);
    };
    fetchPokemon();
  }, [type]);

  return { pokemon, loading };
};

export default UsePokemon;
