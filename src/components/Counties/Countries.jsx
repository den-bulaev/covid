import React, { useEffect, useState } from 'react';
import request from '../../Api/api';

import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    request('summary', { method: 'GET' })
      .then((response) => setCountries(response.Countries));
  }, []);

  return (
    <ul className="countries-list">
      {countries.map((country) => (
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

export default React.memo(Countries);
