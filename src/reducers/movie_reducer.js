import merge from 'lodash/merge'

import { POPULAR_MOVIES, NOW_PLAYING, TOP_RATED } from '../actions/movie_actions'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case POPULAR_MOVIES:
            return merge({}, state, action.popMovies)
        default:
        return state;
    }
}

export default moviesReducer;