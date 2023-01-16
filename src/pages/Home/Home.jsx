import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../service/api';
import { MovieList } from '../../components/MovieList/MovieList';
import { HomeTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setMovies(data);
    });
  }, []);
  return (
    <main>
      <HomeTitle>Most popular films of the day</HomeTitle>
      <MovieList products={movies} />
    </main>
  );
};

export default Home;
