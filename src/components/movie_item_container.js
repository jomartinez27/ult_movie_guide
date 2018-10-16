import { connect } from 'react-redux'
import MovieItem from './movie_item'
import { fetchMovie } from '../actions/movie_actions'

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        movies: state.entities.movies
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovie: id => dispatch(fetchMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)
