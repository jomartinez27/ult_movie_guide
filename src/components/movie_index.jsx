import React from 'react'
import "../CSS/Movie.css"

class MovieRow extends React.Component {
  constructor(props) {
    super(props)

    this.displayInfo = this.displayInfo.bind(this)
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

  displayInfo() {
    let cards = document.getElementsByClassName("movie")
    let moreInfo = document.getElementsByClassName("more-info")
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
      let cardInfo = moreInfo[i]
      card.addEventListener("click", () => {
        if (cardInfo.style.display === "none") {
          cardInfo.style.display = "block"
        } else {
          cardInfo.style.display = "none"
        }
      })
    }
  }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
        {this.displayInfo()}
          <div className="movie" id="movie">
            <div className="images">
              <img src={this.props.movie.img} alt="Movie poster" style={{ width: 188, height: 285 }} />
              <div className="more-info" id="more-info">
                <img src={this.props.movie.background} alt="Movie backdrop"/>
              </div>
            </div>
            <div className="movie-info">
              <div className="movie-title">{this.props.movie.title}
              </div>
              {this.displayDate()}
              <div className="movie-date">Release Date: {this.props.movie.get_date}
              </div>
              <p className="movie-overview">{this.props.movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieRow
