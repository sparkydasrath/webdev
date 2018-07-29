import React, { Component } from 'react';
import './App.css';
import "./components/button1"
import ButtonOne from './components/button1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disabled />
      </div>
    );
  }
}

export default App;
