import React from 'react'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import HomePlaying from './HomePlayingContainer'
import "../../CSS/Home.css"

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPlaying()
        .then(() => this.props.fetchPopular())
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
                  <HomePlaying />
                </div>
            </div>
        )
    }
}

export default Home;
