import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb"
import Spinner from "./Spinner";
import Button from "./Button";

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, sortByLatest, setIsLoadingMore, setSortByLatest } = useHomeFetch();
  
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      {!sortByLatest && state.results[0] ? (
        <HeroImage 
          image={IMAGE_BASE_URL + BACKDROP_SIZE + state.results[0].backdrop_path}
          title={state.results[0].original_title}
          text={state.results[0].overview}
          />
        ) : null
      } 
      <Button 
        text={sortByLatest ? 'Sort by popularity' : 'Sort by latest releases'} 
        callback={() => sortByLatest ? setSortByLatest(false) : setSortByLatest(true)}
        id="sort-button"
      />
      <Grid header={sortByLatest ? "Latest Releases" : "Now Playing"}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage 
            }
            movieId={movie.id}
            title={movie.title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  )
};

export default Home;