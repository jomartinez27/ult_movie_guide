import merge from 'lodash/merge'

import { POPULAR_MOVIES, NOW_PLAYING, TOP_RATED, RECEIVE_MOVIE } from '../actions/movie_actions'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case POPULAR_MOVIES:
            return merge({}, state, action.popMovies)
        case NOW_PLAYING:
            return merge({}, state, action.nowPlaying)
        case TOP_RATED:
            return merge({}, state, action.topRated)
        case RECEIVE_MOVIE:
            console.log(action.movie)
            return merge({}, state, { [action.movie.id]: action.movie})
        default:
        return state;
    }
}

export default moviesReducer;