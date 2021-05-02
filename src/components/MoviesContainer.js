import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import MovieSearch from "./MovieSearch";
import MovieList from './MovieList';
import { getSearchMovies } from "../actions/index";



const useStyles = makeStyles((theme) => ({
  searchContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 4),
  },
  searchButton: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  pagination: {
    padding: theme.spacing(3, 0, 3),
  },
}));

const MoviesContainer = ({ title, movies, loading, errorMessage, getSearchMovies }) => {
  const classes = useStyles();
  const [ page, setPage ] = useState(1);

  const getPagination = (evnt, page) => {
      setPage(page);
      getSearchMovies(title, page);
  }
  return (
    <React.Fragment>
      <main>
        <div className={classes.searchContent}>
          <Container maxWidth="sm">
            <div className={classes.searchButton}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <MovieSearch />
                </Grid> 
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <MovieList />
          <div className={classes.pagination}>
            <Grid container justify="center">
            { !loading && !errorMessage && movies.length > 0 && (
                <Grid item sm={12} md={6}>
                    <Pagination count={movies.length} page={page} variant="outlined" shape="rounded" onChange={getPagination}/>
                </Grid>
            )}
            </Grid>
          </div>
          
        </Container>
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  movies: state.movies,
  loading: state.loading,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps, { getSearchMovies })(MoviesContainer);
