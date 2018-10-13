import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "../CSS/Movie.css"
import $ from 'jquery'

class MovieIndex extends Component {
    constructor(props) {
        super(props)


        this.state = {movieRows: []}
    }

    popularMovies() {
        const urlString = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
        $.ajax({
            url: urlString,
            success: (popularMovies) => {
                const movies = popularMovies.results
                let movieRows = []
                movies.forEach(movie => {
                    movie.img = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    movieRows.push(movie)
                })
                
                this.setState({movieRows: movieRows})
            } 
        })
    }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
        {this.popularMovies()}
            {this.state.movieRows.map(movie => <li key={movie.id} className="movie">
                <img src={movie.img} alt="Movie poster"/>
                <div className="movie-info">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-date">Release Date: {movie.release_date}</div>
                    <p className="movie-overview">{movie.overview}</p>
                </div>
            </li>)}
        </div>
      </div>
    )
  }
}

export default withRouter(MovieIndex)
