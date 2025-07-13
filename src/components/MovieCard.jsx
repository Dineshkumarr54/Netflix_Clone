import React, { useState, useEffect } from 'react';
import axios from '../api/tmdb';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hovered, setHovered] = useState(false);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    if (hovered && movie?.id) {
      const fetchTrailer = async () => {
        try {
          const response = await axios.get(`/movie/${movie.id}/videos`);
          const trailer = response.data.results.find(
            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
          );
          if (trailer) {
            setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0`);
          }
        } catch (err) {
          console.error("Trailer fetch error:", err);
        }
      };
      fetchTrailer();
    } else {
      setTrailerUrl(""); // Clear when not hovered
    }
  }, [hovered, movie]);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
      ) : trailerUrl ? (
        <iframe
          className="movie-trailer"
          src={trailerUrl}
          frameBorder="0"
          allow="autoplay"
          title="Trailer"
        />
      ) : (
      <img
       className={`row__poster ${isLargeRow && "row__posterLarge"}`}
       src={`${IMAGE_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
       alt={movie.name}
      />
      )}
    </div>
  );
};

export default MovieCard;
