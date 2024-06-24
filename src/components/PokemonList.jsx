
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemon = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;
