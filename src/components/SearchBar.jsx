import React, { useState } from 'react';
import axios from '../api/tmdb';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${value}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Search Error:', error);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for movies or shows..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="search-results">
        {results.map((item) =>
          item.poster_path ? (
            <div key={item.id} className="search-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title || item.name}
              />
              <p>{item.title || item.name}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchBar;
