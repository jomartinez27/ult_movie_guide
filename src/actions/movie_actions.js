import * as MovieUtil from '../api/movie_util'

export const POPULAR_MOVIES = 'POPULAR_MOVIES'
export const NOW_PLAYING = 'NOW_PLAYING'
export const TOP_RATED = 'TOP_RATED'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

export const fetchPopular = () => dispatch => (
    MovieUtil.fetchPopular()
    .then(popMovies => dispatch(receivePopular(popMovies)))
)

export const receivePopular = popMovies => {
    return ({
        type: POPULAR_MOVIES,
        popMovies
    })
}

export const fetchPlaying = () => dispatch => (
    MovieUtil.fetchPlaying()
    .then(nowPlaying => dispatch(receivePlaying(nowPlaying)) )
)

export const receivePlaying = nowPlaying => ({
    type: NOW_PLAYING,
    nowPlaying
})

export const fetchRated = () => dispatch => (
    MovieUtil.fetchRated()
    .then(topRated => dispatch(receiveRated(topRated)))
)

export const receiveRated = topRated => ({
    type: TOP_RATED,
    topRated
})

export const fetchMovie = id => dispatch => (
    MovieUtil.fetchMovie(id)
    .then(movie => dispatch(receiveMovie(movie)))
)

export const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie  
})