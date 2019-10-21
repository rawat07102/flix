import React, { useEffect } from "react";

// MUI imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    opacity: 0.95,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  cardHeading: {
    paddingLeft: 0
  },
  posterImg: {
    height: "600px",
    width: "400px",
    minWidth: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "450  px",
      width: "300px"
    }
  },
  date: {
    alignSelf: "flex-start"
  },
  overview: {}
}));

const Movie = ({ movie }) => {
  const classes = useStyles();

  const backgroundGradient =
    "linear-gradient(rgb(0, 188, 212, 0.3) 15%, rgb(255, 255, 255, 0.2) 40%, rgb(0, 188, 212, 0.3) 90%)";

  useEffect(() => {
    document.body.style.backgroundImage = `${backgroundGradient},url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

    return () => {
      document.body.style.backgroundImage = backgroundGradient;
    };
  }, [movie.backdrop_path]);
  return (
    <Card raised className={classes.card}>
      <CardMedia
        className={classes.posterImg}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.headerContainer}>
          <CardHeader
            className={classes.cardHeading}
            title={movie.title}
            subheader={movie.tagline}
          />
          <CardHeader className={classes.date} subheader={movie.release_date} />
        </div>
        <Typography className={classes.overview} align="left" variant="body1">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movie;
