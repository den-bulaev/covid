/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Alert from '../Alert/Alert';
import Countries from '../Countries/Countries';
import logo from '../../icons/logo.png';
// import loupe from '../../icons/loupe.svg';

import './App.scss';

function App() {
  const [query, setQurey] = useState('');
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [countryInfo, setCountryInfo] = useState({});

  const handleClick = () => {
    const customAlert = document.querySelector('.alert');

    customAlert.classList.remove('visible');
    setFilterVisibility(false);
    setCountryInfo({});
  };

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="logo"
          className="header__logo"
        />

        <h1 className="header-text">STATISTIC</h1>

        <input
          id="search"
          type="search"
          placeholder="Search..."
          className="search-field"
          value={query}
          onChange={(event) => setQurey(event.target.value)}
        />
      </header>

      <div className="alert">
        {Object.keys(countryInfo).length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <Alert handleClick={handleClick} {...countryInfo} />
        )}
      </div>

      {filterVisibility && <div className="filter" />}

      <Countries
        query={query}
        setFilterVisibility={setFilterVisibility}
        setCountryInfo={setCountryInfo}
      />
    </>
  );
}

export default App;
