// pages/index.js
"use client";
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PokemonList from '../components/PokemonList';
import UsePokemon from '../hooks/UsePokemon'

const Home = () => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const { pokemon, loading } = UsePokemon(type);

  const handleSearch = (type, search) => {
    setType(type);
    setSearch(search);
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PokemonList pokemon={filteredPokemon} />
      )}
    </div>
  );
};

export default Home;
