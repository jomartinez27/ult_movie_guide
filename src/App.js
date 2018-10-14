import React, { Component } from 'react';
import './CSS/App.css';
import Navbar from './Navbar';
import MovieIndex from './components/movie_index_container'
import { Switch, Route } from 'react-router'
import MovieItem from './components/movie_item' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      <Switch>
        <Route path="/" component={MovieIndex} />
        <Route exact path="/movie/:movieId" component={MovieItem}/>
      </Switch>
      </div>
    );
  }
}

export default App;
