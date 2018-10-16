import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './CSS/App.css';
import MovieRow from './components/movie_index'
import NavBar from './Navbar'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  displayMovies() {
    const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
    const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
    const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`

    let urlString;

    if (this.props.location.pathname === "/rated") {
      urlString = topRated
    } else if (this.props.location.pathname === "/playing") {
      urlString = nowPlaying
    } else {
      urlString = popular
    }


    $.ajax({
      url: urlString,
      method: 'GET',
      success: (searchResults) => {
        const movies = searchResults.results
        let movieRows = []

        movies.forEach(movie => {
          movie.img = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          movie.background = "https://image.tmdb.org/t/p/w185" + movie.backdrop_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.displayMovies()}
        {this.state.rows}
      </div>
    );
  }
}

export default withRouter(App);
