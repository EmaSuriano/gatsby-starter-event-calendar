import PropTypes from 'prop-types';
import React from 'react';

const DayFooter = ({ dayNumber, dayName, isToday, strike }) => (
  <div className="black-alternative tr-l w-20 w-100-l">
    <span className={`${isToday ? 'dark-green' : ''} ${strike ? 'strike' : ''} f3`}>
      {dayNumber > 9 ? dayNumber : `0${dayNumber}`}
    </span>
    <span className={`${isToday ? 'dark-green' : ''} db dn-l f7 ttc`}>{dayName}</span>
  </div>
);

DayFooter.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  dayName: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  strike: PropTypes.bool.isRequired
};

export default DayFooter;
