import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import "../CSS/Home.css"

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPlaying()
    }

    render() {
        if (this.props.movies === undefined) {
            return <div>Loading</div>
        }

        return (
            <div className="home-container">
                <Navbar />
                <div className="movie-guide">
                    The Ultimate Movie Guide
        </div>
                <div className="home-movies-container">
                    {this.props.movies.map(movie =>
                        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-container">
                            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt="Movie poster" />
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default Home;