/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import request from '../../Api/api';

import './Countries.css';

const Countries = ({ query, setFilterVisibility, setCountryInfo }) => {
  const [countries, setCountries] = useState([]);

  let count = 0;

  const getCountryNumber = () => {
    count += 1;

    return count;
  };

  useEffect(() => {
    request('summary', { method: 'GET' })
      .then((response) => {
        setCountries(response.Countries);
      });
  }, []);

  const filteredCountries = () => {
    if (query === '') {
      return countries;
    }

    return countries.filter(
      ({ Country }) => Country
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  };

  const getDate = (dateObject) => {
    const result = [];

    result.push(dateObject.getFullYear());
    result.push(dateObject.getMonth() + 1);
    result.push(dateObject.getDate());

    return result.join('-');
  };

  const getCountry = (event) => {
    const countryName = event.target.innerText
      .toLowerCase()
      .replace(/[()']/g, '')
      .replace(/ô/, 'o');
    const from = getDate(new Date(new Date() - 86400000));
    const to = getDate(new Date());

    request(`total/country/${countryName}?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then((response) => setCountryInfo(response[0]));
  };

  const handleClick = (event) => {
    const customAlert = document.querySelector('.alert');

    setFilterVisibility(true);

    setTimeout(() => customAlert.classList.add('visible'), 300);

    getCountry(event);
  };

  return (
    <ul className="countries-list">
      <li className="countries-list-item">
        <span className="countries-number">№</span>
        <div className="countries-container">Country</div>
        <div className="countries-container">
          <span className="countries-list-info">Total Confirmed</span>
        </div>
      </li>

      {filteredCountries().map(({ ID, Country, TotalConfirmed }) => (
        <li
          key={ID}
          className="countries-list-item"
        >
          <div className="countries-number">{getCountryNumber()}</div>
          <div className="countries-container">
            <pre onClick={handleClick} className="countries-country-name">{Country}</pre>
          </div>
          <div className="countries-container">
            <span className="countries-list-info">{TotalConfirmed}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

Countries.propTypes = {
  query: PropTypes.string.isRequired,
  setFilterVisibility: PropTypes.func.isRequired,
  setCountryInfo: PropTypes.func.isRequired,
};

export default React.memo(Countries);
