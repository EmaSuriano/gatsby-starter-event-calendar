import PropTypes from 'prop-types';
import React from 'react';

const EmptyDays = ({ days }) => {
  const emptyDays = [];

  for (let index = 0; index < days; index += 1) {
    emptyDays.push(
      <div key={index} className="b--black-10 bb bl bw1 dn db-l empty-day width-one-seventh-l" />
    );
  }

  return <>{emptyDays}</>;
};

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired
};

export default EmptyDays;
