import moviesActionTypes from "./movies.types";

// utils

const INITIAL_STATE = {
  moviesList: [],
  movie: null,
  errorMessage: null,
  loading: true,
  searchQuery: "",
  page: 1
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // MoviesList
    case moviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesList: [...state.moviesList, ...action.payload],
        errorMessage: null
      };
    case moviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case moviesActionTypes.SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload
      };
    case moviesActionTypes.CLEAR_MOVIES_LIST:
      return {
        ...state,
        moviesList: []
      };
    // Movie
    case moviesActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        errorMessage: null,
        loading: false
      };
    case moviesActionTypes.LOADING_MOVIE:
      return {
        ...state,
        loading: true
      };
    case moviesActionTypes.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;
