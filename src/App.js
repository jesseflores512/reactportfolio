import React, { Component } from 'react';
import './App.css';
import Navbar from './components/header'
import Routes from './components/routes'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Routes />
      </div>
    );
  }
}

export default App;
