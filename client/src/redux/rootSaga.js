import { all, call } from "redux-saga/effects";

// sagas
import moviesSagas from "./movies/movies.sagas";

function* rootSaga() {
  yield all([call(moviesSagas)]);
}

export default rootSaga;
