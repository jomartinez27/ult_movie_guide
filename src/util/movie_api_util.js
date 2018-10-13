import $ from 'jquery';

export const popularMovies = () => (
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page`,
        method: 'GET',
        succes: searchResults => (
            searchResults.results
        )
    })
)

// export const topRated = () => (
//     $.ajax({
//         url: 
//     })
// )