import React, { Component } from 'react'
import "../CSS/Movie.css"

export default class MovieIndex extends Component {
    constructor(props) {
        super(props)
        const movies = [
            {id: 0, title: "Avengers", overview: "Superhero fight a robot"},
            {id: 1, title: "Marvel", overview: "Superhero fight"}
        ]

        var movieRows = []
        movies.forEach(movie => {
            movieRows.push(<p key={movie.id}>Title: {movie.title}</p>)
        })

        this.state = {movieRows: movieRows}
    }

  render() {
    return (
      <div className="movie-index-container">
        {this.state.movieRows}
      </div>
    )
  }
}
