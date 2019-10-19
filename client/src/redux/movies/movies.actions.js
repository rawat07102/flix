import moviesActionTypes from "./movies.types";

// fetch Movies List Actions
export const fetchMoviesStart = page => ({
  type: moviesActionTypes.FETCH_MOVIES_START,
  payload: page
});

export const fetchMoviesSuccess = moviesList => ({
  type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: moviesList
});

export const fetchMoviesFailure = errorMessage => ({
  type: moviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: errorMessage
});

export const setPageNumber = page => ({
  type: moviesActionTypes.SET_PAGE_NUMBER,
  payload: page
});

export const clearMoviesList = () => ({
  type: moviesActionTypes.CLEAR_MOVIES_LIST
});
// fetch Movie Actions
export const fetchMovieStart = movieId => ({
  type: moviesActionTypes.FETCH_MOVIE_START,
  payload: movieId
});
export const fetchMovieSuccess = movie => ({
  type: moviesActionTypes.FETCH_MOVIE_SUCCESS,
  payload: movie
});
export const fetchMovieFailure = errorMessage => ({
  type: moviesActionTypes.FETCH_MOVIE_FAILURE,
  payload: errorMessage
});
export const loadingMovie = () => ({
  type: moviesActionTypes.LOADING_MOVIE
});
export const changeSearchQuery = userInput => ({
  type: moviesActionTypes.CHANGE_SEARCH_QUERY,
  payload: userInput
});
export const searchMovieWithQuery = query => ({
  type: moviesActionTypes.SEARCH_MOVIE,
  payload: query
});
