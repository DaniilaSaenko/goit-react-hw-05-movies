import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { MoviesDetails } from '../../components/MoviesDetails/MoviesDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('first', movieId);
  return (
    <main>
      <MoviesDetails movieId={movieId} />
    </main>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  movieId: PropTypes.number,
  movie: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
    })
  ),
};
