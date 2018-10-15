import { connect } from 'react-redux';
import MovieIndex from './movie_index';
import { fetchPopular, fetchPlaying, fetchRated } from '../actions/movie_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.entities.movies.results,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPopular: () => dispatch(fetchPopular()),
    fetchPlaying: () => dispatch(fetchPlaying()),
    fetchRated: () => dispatch(fetchRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)


