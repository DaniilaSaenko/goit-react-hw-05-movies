import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../service/api';
import Box from '../Box';
import { Ul, Item, Title, Text } from './Cast.styled';
import noPhoto from '../../pages/NotFound/no-poster.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data));
  }, [movieId]);  

   return (
     <Box>
       {cast.length ? (
         <Ul>
           {cast.map(({ name, id, character, profile_path }) => (
             <Item key={id}>
               {profile_path !== null ? (
                 <img
                   src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                   alt={name}
                   width={200}
                 />
               ) : (
                 <img src={noPhoto} alt={name} width={200} />
               )}
               <Title>{name}</Title>
               <Text>Character: {character}</Text>
             </Item>
           ))}
         </Ul>
        ) : (
        <Text>We don`t have any casts for this movie</Text>
      )}
    </Box>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.number,
  cast: PropTypes.object,
};
