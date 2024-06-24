import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`} className="block p-4 border border-gray-200 rounded-md shadow hover:bg-gray-50">
      <h3 className="text-lg font-medium text-gray-900">{pokemon.name}</h3>
    </Link>
  );
};

export default PokemonCard;
