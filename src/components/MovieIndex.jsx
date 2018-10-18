import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Movies.css'
import Navbar from '../Navbar';

class MovieIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPopular()
  }

  displayDate() {
    let months = {
      "01": "Jan.",
      "02": "Feb.",
      "03": "Mar.",
      "04": "Apr.",
      "05": "May",
      "06": "Jun.",
      "07": "Jul.",
      "08": "Aug.",
      "09": "Sept.",
      "10": "Oct.",
      "11": "Nov.",
      "12": "Dec."
    }
    this.props.movies.forEach(movie => {
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
    if (this.props.movies === undefined) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Navbar />
        <div className="movie-index-container">
          <div className="location">Popular</div>
          <div className="grid-container">
            {this.displayDate()}
            {this.props.movies.map(movie => <li key={movie.id} className="movie">
              <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt="Movie poster" />
              <div className="movie-info">
                <Link to={`movies/${movie.id}`}><div className="movie-title"><div>{movie.title}</div></div></Link>
                <div className="movie-date">Release Date: {movie.get_date}</div>
                <p className="movie-overview">{movie.overview}</p>
              </div>
            </li>)}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieIndex;
