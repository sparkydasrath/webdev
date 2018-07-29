import React, { Component } from 'react';
import './App.css';
import Parent from "./components/parentToChild/parent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "child title"
    }

  }

  childInvokingEvent = (newTitle) => {
    this.setState({ title: newTitle })
  }

  render() {
    return (
      <div className="App">
        <Parent title={this.state.title} doWhatever={this.childInvokingEvent.bind(this, "changing things")} />
      </div>
    );
  }
}

export default App;
