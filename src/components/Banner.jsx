import React, { useEffect, useState } from 'react';
import axios from '../api/tmdb';
import './Banner.css';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      const results = res.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">▶ Play</button>
          <button className="banner__button">+ My List</button>
        </div>
        <p className="banner__description">
          {movie?.overview?.length > 150
            ? movie.overview.substring(0, 150) + "..."
            : movie?.overview}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
