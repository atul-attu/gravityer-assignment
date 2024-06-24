"use client";
import PokemonList from '../components/PokemonList';
import SearchForm from '../components/SearchForm';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.results);
        setFilteredData(data.results);
      });
  }, []);

  const handleSearch = (searchTerm, type) => {
    let filtered = pokemonData;
    if (type) {
      filtered = filtered.filter((p) => p.types && p.types.includes(type));
    }
    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.includes(searchTerm));
    }
    setFilteredData(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} />
      <PokemonList pokemon={filteredData} />
    </div>
  );
}
