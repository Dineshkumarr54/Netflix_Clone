import React, { useEffect, useState } from 'react';
import axios from '../api/tmdb';
import MovieModal from './MovieModal';
import './Row.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      {/* Show modal if selectedMovie is not null */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Row;
