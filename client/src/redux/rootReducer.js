import { combineReducers } from "redux";

// Reducers
import moviesReducer from "./movies/movies.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
