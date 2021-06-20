import React, { useState } from 'react';

import Countries from '../Countries/Countries';
import logo from '../../icons/logo.png';
import confirmed from '../../icons/confirmed.svg';
import deaths from '../../icons/deaths.svg';
import recovered from '../../icons/recovered.svg';

import './App.css';

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
          className="header-logo"
        />

        <h1 className="header-text">STATISTIC</h1>

        <input
          type="search"
          placeholder="Search..."
          className="search-field"
          value={query}
          onChange={(event) => setQurey(event.target.value)}
        />
      </header>

      <div className="alert">
        <h2 className="alert-title">
          {countryInfo.Country}
        </h2>

        <div className="alert-country-info">
          <div className="alert-wrapper">
            <div className="alert-info-with-icon">
              <img
                src={confirmed}
                alt=""
                className="alert-icon"
              />
              <p className="alert-text">Total Confirmed</p>
            </div>

            <p className="alert-text">{countryInfo.Confirmed}</p>
          </div>

          <div className="alert-wrapper">
            <div className="alert-info-with-icon">
              <img
                src={deaths}
                alt=""
                className="alert-icon"
              />
              <p className="alert-text">Total Deaths</p>
            </div>

            <p className="alert-text">{countryInfo.Deaths}</p>
          </div>

          <div className="alert-wrapper">
            <div className="alert-info-with-icon">
              <img
                src={recovered}
                alt=""
                className="alert-icon"
              />
              <p className="alert-text">Total Recovered</p>
            </div>

            <p className="alert-text">{countryInfo.Recovered}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="alert-button"
        >
          ok
        </button>
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
