import { connect } from 'react-redux'

import MovieDetail from './MovieDetail'
import { fetchMovie, fetchCast } from '../actions/movie_actions'

const mapStateToProps = (state, ownProps) => {
    const movie = state.entities.movie[ownProps.match.params.movieId]
    const cast = state.entities.movie[ownProps.match.params.movieId]
    return {
        movie,
        cast
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovie: (id) => dispatch(fetchMovie(id)),
    fetchCast: id => dispatch(fetchCast(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
