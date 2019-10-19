import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

// MUI import
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Container from "@material-ui/core/Container";

// CSS Import
import "./App.css";

// Components
import NavBar from "./NavBar";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff"
    }
  }
});

axios.defaults.baseURL = "/api";
// test
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Container
        style={{ marginTop: "40px", paddingBottom: "10px" }}
        maxWidth="lg"
      >
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies/search" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={Movie} />
        </Switch>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
