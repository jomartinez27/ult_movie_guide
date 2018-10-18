import { connect } from 'react-redux'

import MovieIndexPlaying from './MovieIndexPlaying'
import { fetchPlaying } from '../actions/movie_actions'

const mapStateToProps = state => ({
    movies: state.entities.movie.results
})

const mapDispatchToProps = dispatch => ({
    fetchPlaying: () => dispatch(fetchPlaying())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndexPlaying)
