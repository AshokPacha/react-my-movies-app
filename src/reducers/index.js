import { 
    MOVIE_TITLE,
    SEARCH_MOVIES_SUCCESS, 
    SEARCH_MOVIES_REQUEST, 
    SEARCH_MOVIES_FAILURE, 
    GET_MOVIE_BY_ID, RESET_MOVIE } from '../constants';

const initialState = {
    title: '',
    movies: [],
    loading: false,
    errorMessage: null,
    movie: {},
  };
  
  
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_TITLE: 
            return {
                ...state,
                title: action.title
            }
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.movies
            };
        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.error,
            };
        case GET_MOVIE_BY_ID: 
            return {
                ...state,
                movie: state.movies.filter(item => item.imdbID === action.id)[0]
            };
        case RESET_MOVIE: {
            return { ...initialState }
        }
        default:
            return state;
    }
};