import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import request from '../../Api/api';

import './Countries.css';

const Countries = ({ query }) => {
  const [countries, setCountries] = useState([]);

  let count = 0;

  const getCountryNumber = () => {
    count += 1;

    return count;
  };

  useEffect(() => {
    request('summary', { method: 'GET' })
      .then((response) => setCountries(response.Countries));
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

  return (
    <ul className="countries-list">
      <li className="countries-list-item">
        <span className="countries-number">№</span>
        <span className="countries-info">Country</span>
        <span className="countries-info">Total Confirmed</span>
      </li>

      {filteredCountries().map(({ ID, Country, TotalConfirmed }) => (
        <li
          key={ID}
          className="countries-list-item"
        >
          <span className="countries-number">{getCountryNumber()}</span>
          <span className="countries-info">{Country}</span>
          <span className="countries-info">{TotalConfirmed}</span>
        </li>
      ))}
    </ul>
  );
};

Countries.propTypes = {
  query: PropTypes.string.isRequired,
};

export default React.memo(Countries);
