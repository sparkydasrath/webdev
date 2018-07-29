import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';
import MyComp from './components/MyComp';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass isBoolProp={true} />
        <MyComp name={"comp props"} />
      </div>
    );
  }
}

export default App;
