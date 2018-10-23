import { connect } from 'react-redux'

import Home from './Home'
import { fetchPopular, fetchPlaying, fetchTopRated } from '../../actions/movie_actions'

const mapStateToProps = state => ({
    movies: state.entities.movie.results
})

const mapDispatchToProps = dispatch => ({
    fetchPopular: () => dispatch(fetchPopular()),
    fetchPlaying: () => dispatch(fetchPlaying()),
    fetchTopRated: () => dispatch(fetchTopRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
