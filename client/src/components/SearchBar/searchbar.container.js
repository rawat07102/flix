import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// component
import SearchBar from "./searchbar.component";

// Actions
import {
  searchMovieWithQuery,
  changeSearchQuery
} from "../../redux/movies/movies.actions";

class searchBarContainer extends Component {
  handleChange = ({ target: { value } }) => {
    const { changeSearchQuery } = this.props;
    changeSearchQuery(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { startSearch, history, searchQuery } = this.props;
    if (!searchQuery) return;
    startSearch();
    history.push("/movies/search");
  };

  render() {
    return (
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      ></SearchBar>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.movies.searchQuery
});

const mapDispatchToProps = dispatch => ({
  startSearch: () => dispatch(searchMovieWithQuery()),
  changeSearchQuery: query => dispatch(changeSearchQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(searchBarContainer));
