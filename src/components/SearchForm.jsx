import { useEffect, useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => setTypes(data.results));
  }, []);

  const handleSearch = () => {
    onSearch(searchTerm, selectedType);
  };

  return (
    <div className="flex gap-4 mb-4">
      <select
        className="p-2 border rounded"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="p-2 border rounded"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
