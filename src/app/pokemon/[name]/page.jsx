
import Link from 'next/link';

async function fetchPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function PokemonDetail({ params }) {
  const { name } = params;
  const pokemon = await fetchPokemon(name);

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
}
