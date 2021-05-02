import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { setMovieTitle, getSearchMovies, resetMovie } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const MovieSearch = ({ searchMovie, setMovieTitle, getSearchMovies, resetMovie }) => {
    const classes = useStyles();

    const handleSearchMovie = ({ target: { value } }) => {
      setMovieTitle(value);
    }

    const postSearchMovie = (e) => {
        e.preventDefault();
        if (searchMovie) {
          getSearchMovies(searchMovie);
        }
    }

    const resetSearch = () => {
      resetMovie();
    }
return (
    <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Enter the movie title..."
            onChange={handleSearchMovie}
            value={searchMovie}
        />
        {searchMovie && <IconButton className={classes.iconButton} aria-label="search" onClick={resetSearch}>
          <ClearIcon />
        </IconButton>}
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton size="medium" color="secondary" className={classes.iconButton} onClick={postSearchMovie}>
            Search
        </IconButton>
    </Paper>
    );
}
const mapStateToProps = (state) => ({
  searchMovie: state.title,
});

export default connect(mapStateToProps, { setMovieTitle, getSearchMovies, resetMovie })(MovieSearch);

