import { 
    MOVIE_TITLE, 
    SEARCH_MOVIES_SUCCESS, 
    SEARCH_MOVIES_REQUEST, 
    SEARCH_MOVIES_FAILURE, 
    GET_MOVIE_BY_ID, RESET_MOVIE } from '../constants';

export const setMovieTitle = (title) => {
    return dispactch => dispactch({ type: MOVIE_TITLE, title});
}

export const getSearchMovies = (movie, page = 1) => {
    return dispactch => {
        dispactch({ type: SEARCH_MOVIES_REQUEST, });
        fetch(`https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=c54882de`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    dispactch({ type: SEARCH_MOVIES_SUCCESS, movies: data.Search })
                } else {
                    dispactch({ type: SEARCH_MOVIES_FAILURE, error: data.Error })
                }
              })
    }
};

export const getMovieByid = (id) => {
    return dispactch => {
        dispactch({ type: GET_MOVIE_BY_ID, id})
    }
}

export const resetMovie = () => dispactch => dispactch({ type: RESET_MOVIE })