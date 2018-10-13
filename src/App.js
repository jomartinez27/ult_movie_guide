import React, { Component } from 'react';
import './CSS/App.css';
import Navbar from './Navbar';
import MovieIndex from './components/movie_index'
import { Switch, Route } from 'react-router' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      <Switch>
        <Route path="/" component={MovieIndex} />
      </Switch>
      </div>
    );
  }
}

export default App;
