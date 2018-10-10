import React, { Component } from 'react';
import './CSS/App.css';
import Navbar from './Navbar';
import MovieIndex from './components/movie_index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MovieIndex />
      </div>
    );
  }
}

export default App;
