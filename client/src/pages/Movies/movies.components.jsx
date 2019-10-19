import React from "react";
import { withRouter } from "react-router-dom";
// MUI import
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridList from "@material-ui/core/GridList";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// styles
const useStyles = makeStyles(theme => ({
  listTile: {
    cursor: "pointer"
  },
  tileBarRoot: {
    transition: "height 0.3s ease-out",
    "&:hover": {
      height: "100%",
      "& div": {
        whiteSpace: "normal",
        lineHeight: "1.3",
        margin: "10px 5px"
      }
    }
  },
  tileBarRootSubtitle: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
  }
}));

const Movies = ({ movies, history }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const xsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <GridList
      cellHeight={xsScreen ? 300 : 400}
      cols={smScreen ? 2 : 4}
      spacing={4}
      className={classes.gridContainer}
    >
      {movies.map(movie => (
        <GridListTile
          onClick={() => history.push(`movies/${movie.id}`)}
          key={movie.id}
          className={classes.listTile}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <GridListTileBar
            title={movie.title}
            subtitle={movie.overview}
            classes={{
              root: classes.tileBarRoot,
              rootSubtitle: classes.tileBarRootSubtitle,
              subtitle: classes.subtitle
            }}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withRouter(Movies);
