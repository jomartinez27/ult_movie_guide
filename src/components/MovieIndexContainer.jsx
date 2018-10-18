import { connect } from 'react-redux'

import MovieIndex from './MovieIndex'
import { fetchPopular } from '../actions/movie_actions'

const mapStateToProps = state => ({
    movies: state.entities.movie.results
})

const mapDispatchToProps = dispatch => ({
    fetchPopular: () => dispatch(fetchPopular())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)


