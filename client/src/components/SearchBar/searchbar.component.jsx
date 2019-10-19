import React from "react";

import InputBase from "@material-ui/core/InputBase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  search: {
    marginRight: "auto",
    display: "flex",
    width: "30%",
    minWidth: 200,
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    alignItems: "center"
  },
  inputRoot: {
    color: "white",
    flex: "1"
  },
  inputInput: {
    width: "100%",
    paddingLeft: "0.2rem"
  },
  searchButton: {
    padding: "0.2rem 0",
    "& span": {
      width: "20px"
    }
  }
}));

const SearchBar = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.search}>
      <Button type="submit" className={classes.searchButton}>
        <SearchIcon />
      </Button>
      <InputBase
        onChange={handleChange}
        placeholder="Search..."
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
        inputProps={{ "aria-label": "search", type: "search" }}
      />
    </form>
  );
};

export default SearchBar;
