import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "sampleName"
  }

  handleClick = (newName) => {
    this.setState({
      name: newName
    });
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <br />

        <button onClick={() => this.handleClick("using anon func")}>Change state with anon func</button>
        <button onClick={this.handleClick.bind(this, "using bind")}>Change state with bind</button>
        <br />
        <input type="text" name="none" id="none" onChange={this.handleOnChange} value={this.state.name} />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
