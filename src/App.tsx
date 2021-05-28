import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test text="Jerry!!!" />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
