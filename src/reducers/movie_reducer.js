import merge from 'lodash/merge'

import {
    RECEIVE_MOVIE,
    RECEIVE_CAST,
    RECEIVE_RATED,
    RECEIVE_PLAYING,
    RECEIVE_POPULAR
} from '../actions/movie_actions'

const movieReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_POPULAR:
            return merge({}, state, action.movie)
        case RECEIVE_PLAYING:
            return merge({}, state, action.movie)
        case RECEIVE_RATED:
            return merge({}, state, action.movie)
        case RECEIVE_MOVIE:
            return merge({}, state, { [action.payload.id]: action.payload })
        case RECEIVE_CAST:
            return merge({}, state, { [action.payload.id]: action.payload })
        default:
            return state;
    }
}

export default movieReducer;