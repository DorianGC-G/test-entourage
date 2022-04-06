import { useState, useEffect } from "react";

// API
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [sortByLatest, setSortByLatest] = useState(false)

  const fetchMovies = async (page, sorted) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(sorted, page);

      setState(prev => ({
        ...movies,
        results:
        page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial render
  useEffect(() => {
    fetchMovies(1, sortByLatest)
  }, [sortByLatest]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, sortByLatest);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, sortByLatest]);

  return { state, loading, error, sortByLatest, setIsLoadingMore, setSortByLatest };

};