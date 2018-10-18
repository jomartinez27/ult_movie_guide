import $ from 'jquery'

export const fetchPopular = () => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
    })
)

export const fetchPlaying = () => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
    })
)

export const fetchTopRated = () => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
    })
)

export const fetchMovie = movie_id => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US`,
    })
)

export const fetchCast = movieId => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=13974aec8a507bc409f142057852e657`
    })
)