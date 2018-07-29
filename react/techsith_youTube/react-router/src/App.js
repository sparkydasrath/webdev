import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

const User = ({ match }) => {
  return (<h1>Welcome user, {match.params.username}</h1>);
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact strict
            render={
              () => { return (<div>You used a route</div>) }
            } />
          <Route path="/about" exact strict
            render={
              () => { return (<div>About</div>) }
            } />
          <Route path="/about/user/:username" exact strict component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
