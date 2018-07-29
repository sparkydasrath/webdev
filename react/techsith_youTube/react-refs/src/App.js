import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name</span>
          <input type="text" name="" id="" />
        </div>
        <div>
          <span>Last Name</span>
          <input type="text" name="" id="" />
        </div>
        <div>
          <span>Age</span>
          <input type="text" name="" id="" />
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </div>
    );
  }
}

export default App;
