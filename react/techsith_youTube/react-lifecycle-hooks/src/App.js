import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillMount() {
    console.log("component will mount");
  }


  render() {
    console.log("rendering....")
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
