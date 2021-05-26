import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{total}</li>
    <li>
      Positive feedback: {total !== 0 ? Math.floor(positivePercentage) : 0}%
    </li>
  </ul>
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;