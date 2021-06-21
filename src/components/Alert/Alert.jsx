import React from 'react';
import PropTypes from 'prop-types';

import confirmed from '../../icons/confirmed.svg';
import deaths from '../../icons/deaths.svg';
import recovered from '../../icons/recovered.svg';

import './Alert.scss';

const Alert = ({
  handleClick, Country, Confirmed, Deaths, Recovered,
}) => (
  <>
    <h2 className="alert__title">
      {Country}
    </h2>

    <div className="alert__wrapper">
      <div className="alert__info-with-icon">
        <img
          src={confirmed}
          alt=""
          className="alert__icon"
        />
        <p className="alert__text">Total Confirmed</p>
      </div>

      <p className="alert__text">{Confirmed}</p>
    </div>

    <div className="alert__wrapper">
      <div className="alert__info-with-icon">
        <img
          src={deaths}
          alt=""
          className="alert__icon"
        />
        <p className="alert__text">Total Deaths</p>
      </div>

      <p className="alert__text">{Deaths}</p>
    </div>

    <div className="alert__wrapper">
      <div className="alert__info-with-icon">
        <img
          src={recovered}
          alt=""
          className="alert__icon"
        />
        <p className="alert__text">Total Recovered</p>
      </div>

      <p className="alert__text">{Recovered}</p>
    </div>

    <button
      type="button"
      onClick={handleClick}
      className="alert__button"
    >
      ok
    </button>
  </>
);

Alert.propTypes = {
  handleClick: PropTypes.func.isRequired,
  Country: PropTypes.string.isRequired,
  Recovered: PropTypes.number.isRequired,
  Confirmed: PropTypes.number.isRequired,
  Deaths: PropTypes.number.isRequired,
};

export default React.memo(Alert);
