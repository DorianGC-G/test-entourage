import { formatDate } from "./helpers";

// Configuration for TMDB API
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;
const TODAY = formatDate(new Date())

const NOW_PLAYING_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_release_type=3&watch_region=eu`;
const NOW_PLAYING_SORTED_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&release_date.lte=${TODAY}&with_release_type=3&watch_region=eu&sort_by=release_date.desc&vote_average.gte=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  NOW_PLAYING_BASE_URL,
  NOW_PLAYING_SORTED_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
