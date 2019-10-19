import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import makeStyles from "@material-ui/styles/makeStyles";

// MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Drawer from "./Drawer.component";
import Container from "@material-ui/core/Container";

// component imports
import HideOnScroll from "./HideOnScroll.component";
import SearchBar from "../SearchBar";

const useStyles = makeStyles(theme => ({
  link: {
    marginRight: theme.spacing(2)
  }
}));

const NavBar = () => {
  // Hooks
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  const NavbarMarkup = match ? (
    <Drawer />
  ) : (
    <Fragment>
      <SearchBar></SearchBar>
      <Button component={Link} to="/" color="inherit" className={classes.link}>
        Movies
      </Button>
      <Button component={Link} to="/account" color="inherit">
        Account
      </Button>
    </Fragment>
  );

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar
          component={Container}
          maxWidth="lg"
          disableGutters={true}
          className={classes.navContainer}
        >
          {NavbarMarkup}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
