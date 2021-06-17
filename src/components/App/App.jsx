import React from 'react';

import Countries from '../Counties/Countries';
import logo from './logo.png';

import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />

        <h1>STATISTIC</h1>

        <input
          type="search"
          placeholder="Search..."
          className="search-field"
        />
      </header>

      <Countries />
    </>
  );
}

export default App;
