import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieName, Img } from './MovieList.styled';
import noPhoto from '../../pages/NotFound/no-poster.png';

export const MovieList = ({ products }) => {
  const location = useLocation();
  const IMG = 'https://image.tmdb.org/t/p/original';
  console.log(products);
  return (
    <Container>
      {products?.map(movie => (
        <CardWrapper key={movie?.id}>
          <Link to={`/movies/${movie?.id}`} state={{ from: location }}>
               {movie?.poster_path !== null ? (
                  <Img
                    src={`${IMG}${movie?.poster_path}`}
                    alt=""
                    width={200}
                  />
                ) : (
                  <Img src={noPhoto} alt="" width={278} />
                )}   
            <MovieName>{movie?.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
