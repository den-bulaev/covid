import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import request from '../../Api/api';

import './Countries.css';

const Countries = ({ query }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    request('summary', { method: 'GET' })
      .then((response) => setCountries(response.Countries));
  }, [query]);

  const filteredCountries = () => {
    if (query === '') {
      return countries;
    }

    return countries.filter(
      ({ Country }) => Country.toLowerCase().includes(query.toLowerCase()),
    );
  };

  return (
    <ul className="countries-list">
      {filteredCountries().map((country) => (
        <li
          key={country.ID}
          className="countries-list-item"
        >
          <span>{country.Country}</span>
          <span>{country.TotalConfirmed}</span>
        </li>
      ))}
    </ul>
  );
};

Countries.propTypes = {
  query: PropTypes.string.isRequired,
};

export default React.memo(Countries);
