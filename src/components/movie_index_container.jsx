import { connect } from 'react-redux';
import { popularMovies} from '../util/movie_api_util';
import MovieIndex from './movie_index';

const mapDispatchToProps = dispatch => ({
    popularMovies: dispatch(popularMovies)
})

export default connect(null, mapDispatchToProps)(MovieIndex)