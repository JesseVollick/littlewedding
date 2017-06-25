import React, { Component } from 'react';
import './App.css';
import TheStory from './components/TheStory/TheStory';
import Header from './components/Header';
import TheVenue from './components/TheVenue';
import Rsvp from "./components/rsvp/Rsvp";

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <TheStory/>
          <TheVenue />
          <Rsvp />
      </div>
    );
  }
}


export default App;
