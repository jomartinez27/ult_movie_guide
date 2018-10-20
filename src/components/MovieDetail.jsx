import React from 'react'
import '../CSS/movie_detail.css'
import Navbar from '../Navbar'

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId)
    this.props.fetchCast(this.props.match.params.movieId)
  }

  displayCast() {
    let div = []
    for (let i = 0; i < 8; i++) {
      let actor = this.props.movie.cast[i]
      let profileImage = actor.profile_path === null ? `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png` : `https://image.tmdb.org/t/p/original/${actor.profile_path}`
      div.push(
        <div key={actor.id} className="actor-profile-container">
          <img src={profileImage} alt="Actor Profile" className="prof-img" />
          <div className="actor-name">{actor.name}</div>
        </div>
      )
    }
    return div
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
    let year = "";
    let month = "";
    let day = "";
    let date = this.props.movie.release_date.split('-')
    year += date[0];
    month += months[date[1]];
    day += date[2]
    this.props.movie.get_date = `${month} ${day}, ${year}`
  }

  render() {
    if (this.props.movie === undefined || this.props.movie.cast === undefined || this.props.movie.genres === undefined) {
      return <div>Loading</div>
    }

    let img = `https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`
    let genre1 = (this.props.movie.genres[0] === undefined ? "" : this.props.movie.genres[0].name)
    let genre2 = (this.props.movie.genres[1] === undefined ? "" : this.props.movie.genres[1].name)
    let logoPath = (this.props.movie.production_companies[0] === undefined ? `https://image.tmdb.org/t/p/original/null` : `https://image.tmdb.org/t/p/original/${this.props.movie.production_companies[0].logo_path}`)
    let budget = (this.props.movie.budget === 0 ? '-' : this.props.movie.budget.toLocaleString())
    return (
      <div className="movie-detail-container" style={{ backgroundImage: `url(${img})` }}>
        <Navbar />
        <div className="movie-detail-title">{this.props.movie.title}</div>
        <div className="movie-detail-info-container">
          <img src={`https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`} className="movie-detail-img" alt="Movie Poster" />
          <div>
            <div className="movie-tagline">Tagline: {this.props.movie.tagline}
              <br></br>
              Genre: {genre1}
              &nbsp;
              {genre2}
              {this.displayDate()}
              <div>Release Date: {this.props.movie.get_date}</div>
              <p>{this.props.movie.overview}</p>
              <div className="more-details">
                Voter Average: {(this.props.movie.vote_average) * 10}%
              </div>
              <div className="final-details">
                <div>Origninal language: {this.props.movie.original_language}</div>
                <div>Budget: ${budget}</div>
                <div className="prod-company-container">
                  <img src={logoPath} className="prod-img" alt="Production Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5>Top Cast</h5>
        <div className="prof-container">
          {this.displayCast()}
        </div>
      </div>
    )
  }
}

export default MovieDetail;