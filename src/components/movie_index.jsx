import React, { Component } from 'react'
import "../CSS/Movie.css"
import $ from 'jquery'

export default class MovieIndex extends Component {
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
            {this.state.movieRows.map(movie => <li key={movie.id}>
                <img src={movie.img}/>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
            </li>)}
        </div>
      </div>
    )
  }
}
