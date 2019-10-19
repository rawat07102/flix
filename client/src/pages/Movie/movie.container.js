import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
// Actions
import { fetchMovieStart } from "../../redux/movies/movies.actions";

import Movie from "./movie.component";

class MovieContainer extends Component {
  componentDidMount() {
    const {
      fetchMovie,
      match: {
        params: { movieId }
      },
      movie
    } = this.props;
    if (!movie || movie.id.toString() !== movieId) {
      // fetch Movie with id
      fetchMovie(movieId);
    }
  }

  render() {
    const { movie, loading } = this.props;
    const movieMarkup = !loading ? <Movie movie={movie} /> : <h1>Loading</h1>;
    return movieMarkup;
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  loading: state.movies.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieId => dispatch(fetchMovieStart(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
