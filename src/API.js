import {
  NOW_PLAYING_BASE_URL,
  NOW_PLAYING_SORTED_BASE_URL,
  API_URL,
  API_KEY,
} from './config';

const apiSettings = {
  fetchMovies: async (sorted, page) => {
    const endpoint = sorted
      ? `${NOW_PLAYING_SORTED_BASE_URL}&page=${page}`
      : `${NOW_PLAYING_BASE_URL}$&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  }
};

export default apiSettings;
