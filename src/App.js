import React, { Component } from 'react';
import './App.css';
import TheStory from './components/TheStory/TheStory';
import Header from './components/Header';
import TheVenue from './components/TheVenue';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TheStory/>
        <TheVenue/>
      </div>
    );
  }
}


export default App;
