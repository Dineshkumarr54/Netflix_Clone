import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './MovieModal.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieModal = ({ movie, onClose }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const title =
      movie?.title || movie?.original_title || movie?.name || movie?.original_name;

    if (title) {
      movieTrailer(title)
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          } else {
            console.warn("No trailer found for:", title);
          }
        })
        .catch((err) => {
          console.error("Error finding trailer:", err);
        });
    }
  }, [movie]);

  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          className="modal__image"
          src={`${IMAGE_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="modal__info">
          <h2>{movie?.title || movie?.name}</h2>
          <p><strong>Release:</strong> {movie?.release_date}</p>
          <p><strong>Rating:</strong> ⭐ {movie?.vote_average}</p>
          <p>{movie?.overview}</p>
        </div>

        {trailerUrl ? (
          <div className="modal__trailer">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        ) : (
          <p style={{ marginTop: '20px', color: '#999' }}>🎬 No trailer found.</p>
        )}

        <button className="modal__close" onClick={onClose}>❌ Close</button>
      </div>
    </div>
  );
};

export default MovieModal;
