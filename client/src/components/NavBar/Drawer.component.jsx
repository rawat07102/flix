import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
// component Imports
import SearchBar from "../SearchBar";

// MUI import
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  muiPaperRoot: {
    minWidth: "150px",
    width: "30vw",
    backgroundColor: theme.palette.primary.light
  },
  buttonRoot: {
    padding: 0,
    minWidth: "24px"
  },
  buttonLabel: {
    width: "24px"
  },
  inputRoot: {
    color: "white",
    flex: "1"
  },
  inputInput: {
    width: "100%",
    paddingLeft: "0.2rem"
  }
}));

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setOpen(open);
  };

  return (
    <Fragment>
      <SearchBar />
      <Button
        classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </Button>
      <MuiDrawer
        classes={{ paper: classes.muiPaperRoot }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List dense component="nav">
          <ListItem>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ "aria-label": "search", type: "search" }}
            />
          </ListItem>
          <ListItem component={Link} to="/">
            <ListItemText primary="Movies" />
          </ListItem>
          <ListItem component={Link} to="/account">
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </MuiDrawer>
    </Fragment>
  );
};

export default Drawer;
