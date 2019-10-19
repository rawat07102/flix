import { takeLatest, all, call, put, select } from "redux-saga/effects";
import axios from "axios";

import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieSuccess,
  loadingMovie,
  setPageNumber,
  clearMoviesList
} from "./movies.actions";
import moviesActionTypes from "./movies.types";

const searchQuerySelector = state => state.movies.searchQuery;
// Async
function* fetchMoviesList({ payload: page }) {
  try {
    const response = yield call(axios.get, `/movie/popular?page=${page}`);
    const moviesList = response.data;
    yield all([
      yield put(fetchMoviesSuccess(moviesList.results)),
      yield put(setPageNumber(page + 1))
    ]);
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

function* fetchMovie({ payload: movieId }) {
  try {
    yield put(loadingMovie());
    const response = yield call(axios.get, `/movie/${movieId}`);
    const data = yield response.data;
    yield put(fetchMovieSuccess(data));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

function* searchMovie() {
  try {
    const searchQuery = yield select(searchQuerySelector);
    const response = yield call(axios.get, `/movie/search/${searchQuery}`);
    const movies = response.data.results;
    yield all([put(clearMoviesList()), put(fetchMoviesSuccess(movies))]);
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

// onStart
function* onFetchMoviesListStart() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIES_START, fetchMoviesList);
}

function* onFetchMovie() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIE_START, fetchMovie);
}

function* onSearchMovie() {
  yield takeLatest(moviesActionTypes.SEARCH_MOVIE, searchMovie);
}
// movies sagas
function* moviesSagas() {
  yield all([
    call(onFetchMoviesListStart),
    call(onFetchMovie),
    call(onSearchMovie)
  ]);
}

export default moviesSagas;
