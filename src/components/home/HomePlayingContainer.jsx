import { connect } from 'react-redux'

import HomePlaying from './HomePlaying'
import { fetchPopular, fetchPlaying, fetchTopRated } from '../../actions/movie_actions'

const mapStateToProps = state => ({
    movies: state.entities.movie.results
})

const mapDispatchToProps = dispatch => ({
    fetchPlaying: () => dispatch(fetchPlaying()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePlaying)
