import * as MovieUtil from '../util/api_util'

export const RECEIVE_POPULAR = 'RECEIVE_POPULAR'
export const RECEIVE_PLAYING = 'RECEIVE_PLAYING'
export const RECEIVE_RATED = 'RECEIVE_RATED'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const RECEIVE_CAST = 'RECEIVE_CAST'

export const fetchPopular = () => dispatch => (
    MovieUtil.fetchPopular()
        .then(movie => dispatch(receivePopular(movie)))
)

export const receivePopular = movie => ({
    type: RECEIVE_POPULAR,
    movie
})

export const fetchPlaying = () => dispatch => (
    MovieUtil.fetchPlaying()
        .then(movie => dispatch(receivePlaying(movie)))
)

export const receivePlaying = movie => ({
    type: RECEIVE_PLAYING,
    movie
})

export const fetchTopRated = () => dispatch => (
    MovieUtil.fetchTopRated()
        .then(movie => dispatch(receiveRated(movie)))
)

export const receiveRated = movie => ({
    type: RECEIVE_RATED,
    movie
})

export const fetchMovie = id => dispatch => (
    MovieUtil.fetchMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const receiveMovie = payload => ({
    type: RECEIVE_MOVIE,
    payload
})

export const fetchCast = id => dispatch => (
    MovieUtil.fetchCast(id)
        .then(movie => dispatch(receiveCast(movie)))
)

export const receiveCast = payload => ({
    type: RECEIVE_CAST,
    payload
})