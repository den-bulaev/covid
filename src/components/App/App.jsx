import React, { useState } from 'react';

import Countries from '../Countries/Countries';
import logo from './logo.png';

import './App.css';

function App() {
  const [query, setQurey] = useState('');

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />

        <h1 className="header-text">STATISTIC</h1>

        <input
          type="search"
          placeholder="Search..."
          className="search-field"
          value={query}
          onChange={(event) => setQurey(event.target.value)}
        />
      </header>

      <Countries query={query} />
    </>
  );
}

export default App;
