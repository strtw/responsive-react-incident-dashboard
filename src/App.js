import React from 'react';
import logo from './logo.svg';
import './global.scss';
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
