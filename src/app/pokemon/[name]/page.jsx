// src/app/pokemon/[name]/page.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/">Home</Link> &gt; {pokemon.name}
      </nav>
      <div className="border p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mb-4" />
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
