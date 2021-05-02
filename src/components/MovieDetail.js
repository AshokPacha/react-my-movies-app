import React, { useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Typography, Container, Button, CardMedia, CardContent, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import sample from '../sample.jpg';
import { getMovieByid } from '../actions';

const useStyles = makeStyles((theme) => ({
    introduction: {
        padding: theme.spacing(8, 0, 8),
    },
    info: {
        padding: theme.spacing(4, 0, 4),
    }
  }));

const MovieDetail = ({ movie, getMovieByid }) => {
    const classes = useStyles();
    const history = useHistory();
    const newPoster = movie?.Poster !== 'N/A' ? movie?.Poster : sample;

    useEffect(() => {
        const imdbID = history.location.pathname.split('/')[2];
        getMovieByid(imdbID);
    })

    return (
        <React.Fragment>
            <Container maxWidth="md">
             <div className={classes.introduction}>
                <Card>
                <Grid container justify="center">
                    <Grid md={6} xs={12} item>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            image={newPoster}
                            title={movie.Title}
                            height="250"
                            width="150"
                        />
                    </Grid>
                    <Grid md={6} xs={12} item>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                              Title : {movie.Title}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                              Type : {movie.Type}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                              Year : {movie.Year}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                </Card>                            
            </div>
            <div>
                <Typography align="right">
                     <Link to="/" style={{ textDecoration: 'none' }}>
                         <Button variant="contained" color="primary">
                             <ArrowBackIcon />
                            Go Back
                         </Button>
                     </Link>
                </Typography>
            </div>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

export default connect(mapStateToProps, { getMovieByid })(MovieDetail);