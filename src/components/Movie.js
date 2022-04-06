import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Thumb from "./Thumb";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId)

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar 
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header={!movie.recommended.results.length ? '' : 'Other movies you may like:'}>
        {movie.recommended.results.map(reco => (
          <Thumb
            key={reco.id}
            image={reco.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + reco.poster_path
                : NoImage }
            clickable={true}
            movieId={reco.id}
            title={reco.title}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;