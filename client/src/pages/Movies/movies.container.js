import React, { Component } from "react";
import { InView } from "react-intersection-observer";

// Redux
import { connect } from "react-redux";

// Actions
import { fetchMoviesStart } from "../../redux/movies/movies.actions";

// MUI
import CircularProgress from "@material-ui/core/CircularProgress";

import Movies from "./movies.components";

class MoviesContainer extends Component {
  componentDidMount() {
    // fetch movies
    const { fetchMoviesList, page, searchQuery, history, match } = this.props;
    if (!searchQuery && match.path === "/movies/search") {
      history.replace("/");
    }
    if (page > 1 && searchQuery) return;

    fetchMoviesList(page);
  }

  handleObserver = (inView, entry) => {
    const { fetchMoviesList, page, searchQuery } = this.props;
    if (searchQuery) return;
    if (inView) fetchMoviesList(page);
  };

  render() {
    const { moviesList, match } = this.props;

    const loaderDivStyles = {
      justifyContent: "center",
      alignItems: "center",
      margin: "50px 0"
    };

    loaderDivStyles.display = match.path === "/movies/search" ? "none" : "flex";

    return (
      <React.Fragment>
        <Movies movies={moviesList} />
        {/* <div ref={this.loadingRef}> */}
        <InView onChange={this.handleObserver}>
          {({ inView, ref, entry }) => (
            <div style={loaderDivStyles} ref={ref}>
              <CircularProgress size={100} />
            </div>
          )}
        </InView>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.movies.moviesList,
  page: state.movies.page,
  searchQuery: state.movies.searchQuery
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesList: page => dispatch(fetchMoviesStart(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
