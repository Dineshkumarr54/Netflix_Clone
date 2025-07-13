import React from 'react';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import Row from '../components/Row';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Banner fetchUrl={requests.fetchTrending} />
      <Row title="🔥 Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="⭐ Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="💥 Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
};

export default Home;
