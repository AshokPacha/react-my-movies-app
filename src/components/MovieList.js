import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

import Movie from "./Movie";

const useStyles = makeStyles((theme) => ({
    spinner: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    introduction: {
        padding: theme.spacing(6, 0, 6),
    }
  }));

function MovieList({movies, loading, errorMessage }) {
    const classes = useStyles();

    return (
    <Grid container spacing={4} justify="center">
    {loading && !errorMessage ? (
        <Grid item>
            <CircularProgress />
        </Grid>                
        ) : errorMessage ? (
        <Grid item>
            <Typography variant="caption" align="center" gutterBottom>{errorMessage}, Please enter valid title.</Typography>
        </Grid> 
        ) : ( movies && movies.map(movie => (
            <Grid item key={movie.imdbID}>
                <Movie movie={movie} />
            </Grid>
        ))
    )}
    {!loading && !errorMessage && movies.length === 0 && (
        <Grid item>
            <div className={classes.introduction}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    My Movies
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. 
                    So many titles, so much to experience. Search your favourite movies and watch them before you die.
                </Typography>
            </div>            
        </Grid>
    )}
    </Grid>
    );
}
const mapStateToProps = (state) => ({
    movies: state.movies,
    loading: state.loading,
    errorMessage: state.errorMessage
  });

export default connect(mapStateToProps, null)(MovieList);