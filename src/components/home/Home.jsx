import React from 'react'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'
// import { Carousel } from 'react-bootstrap'
import "../../CSS/Home.css"

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPlaying()
        .then(() => this.props.fetchPopular())
    }

    render() {
        if (this.props.movies === undefined) {
            return (
              <div>
                <Navbar />
                <div className="loading-container">
                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
            )
        }

        return (
            <div className="home-container">
                <Navbar />
                <div className="movie-guide">
                    The Ultimate Movie Guide
                </div>
                <div className="home-movies-container">
                  {this.props.movies.map(movie =>
                    <Link to={`movies/${movie.id}`} key={movie.id}>
                      <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt={`${movie.title} Poster`}/>
                    </Link>
                  )}
                </div>
            </div>
        )
    }
}

export default Home;
