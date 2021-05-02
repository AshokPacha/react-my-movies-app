import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import sample from '../sample.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
});


const Movie = ({ movie: { Title, Poster, imdbID } }) => {
  const classes = useStyles();
  const newPoster = Poster !== 'N/A' ? Poster : sample;

  return (
    <Link to={`title/${imdbID}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="220"
            image={newPoster}
            title={Title}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" align="center">
              {Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default Movie;