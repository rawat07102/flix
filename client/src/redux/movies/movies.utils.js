export const getMoviesList = (state, moviesList) => {
  const oldMoviesList = state.moviesList;
  console.log([...oldMoviesList, ...moviesList]);
  if (oldMoviesList) return [...oldMoviesList, ...moviesList];
  return moviesList;
};
