import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';


const Temp = (props) => {
  console.log("Render Temp");
  return (<h1>{props.val}</h1>);
}

// if your component extends PureComponent, you don't need to call shouldComponentUpdate() and it is 
//  handled under the covers
class App extends PureComponent {
  state = {
    val: 1
  }

  // componentDidMount() {
  //   // simulate that state is not changing, but render is called each time setState is run anyway
  //   setInterval(() => {
  //     this.setState({ val: 1 });
  //   }, 1000);
  // }

  // now with an update
  componentDidMount() {
    // simulate that state is not changing, but render is called each time setState is run anyway
    setInterval(() => {
      this.setState({ val: 1 });
    }, 1000);
  }


  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log("next state: ", nextState);
  //   console.log("curren state: ", this.state);
  //   // nextState is the state is will be passed to this function when setState is run
  //   return (this.state.val === nextState.val ? false : true); // if the state does not change this returns false and a re-render should not happen
  // }

  render() {
    console.log("Render App");
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
