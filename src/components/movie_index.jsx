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
        const popularString = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
        const playingString = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`
        const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US&page=1`

        let urlString;
        if (this.props.location.pathname === "/rated") {
            urlString = topRated;
        } else if (this.props.location.pathname === "/playing") {
            urlString = playingString;
        } else {
            urlString = popularString;
        }

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

    displayDate() {
        let months = {
            "01" : "Jan.",
            "02" : "Feb.",
            "03" : "Mar.",
            "04" : "Apr.",
            "05" : "May",
            "06" : "Jun.",
            "07" : "Jul.",
            "08" : "Aug.",
            "09" : "Sept.",
            "10" : "Oct.",
            "11" : "Nov.",
            "12" : "Dec."
        }
        this.state.movieRows.forEach(movie => {
            let year = "";
            let month = "";
            let day = "";
            let date = movie.release_date.split('-')
            year += date[0];
            month += months[date[1]];
            day += date[2]
            movie.get_date = `${month} ${day}, ${year}`
        })
    }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
        {this.popularMovies()}
        {this.displayDate()}
            {this.state.movieRows.map(movie => <li key={movie.id} className="movie">
                <img src={movie.img} alt="Movie poster"/>
                <div className="movie-info">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-date">Release Date: {movie.get_date}</div>
                    <p className="movie-overview">{movie.overview}</p>
                </div>
            </li>)}
        </div>
      </div>
    )
  }
}

export default withRouter(MovieIndex)
