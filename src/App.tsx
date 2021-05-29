import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Test from './Test'
import CalendarContainer from './Calendar/CalendarContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalendarContainer />
      </header>
    </div>
  );
}

export default App;
