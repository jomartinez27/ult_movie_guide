import React, { Component } from 'react'
import "../CSS/Movie.css"

export default class MovieIndex extends Component {
    constructor(props) {
        // super(props)
        // const movies = [
        //     { id: 0, title: "Avengers", overview: "Superhero fight a robot", img: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"},
        //     { id: 1, title: "Marvel", overview: "Superhero fight", img: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg"}
        // ]

        // var movieRows = []
        // movies.forEach(movie => {
        //     movieRows.push(movie)
        // })

        // this.state = {movieRows: movieRows}
    }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
            {this.state.movieRows.map(movie => <li key={movie.id}>
                <img src={movie.img} />
                <div>{movie.title}</div>
                <p>{movie.overview}</p>
            </li>)}
        </div>
      </div>
    )
  }
}
