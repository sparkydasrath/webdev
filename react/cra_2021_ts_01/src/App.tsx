import React from 'react';
import logo from './logo.svg';
import './App.css';

const greeting = <div style={{ background: 'yellow' }}>Hello Again</div>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">sparky's test</p>
        <p style={{ color: 'blue', fontSize: 20 }}>sparky's test2</p>
        <p>{greeting}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
