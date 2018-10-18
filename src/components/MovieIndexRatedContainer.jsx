import { connect } from 'react-redux'

import MovieIndexRated from './MovieIndexRated'
import { fetchTopRated } from '../actions/movie_actions'

const mapStateToProps = state => ({
    movies: state.entities.movie.results
})

const mapDispatchToProps = dispatch => ({
    fetchTopRated: () => dispatch(fetchTopRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndexRated)
