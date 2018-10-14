import { combineReducers } from 'redux'
import movieReducer from './movie_reducer'

export default combineReducers({
    movies: movieReducer
})