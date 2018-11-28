import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Box, Text } from 'grommet'
import CalendarBox from './CalendarBox'

const EmptyDays = ({ days }) => {
  const emptyDays = []

  for (let index = 0; index < days; index += 1) {
    emptyDays.push(
      <div
        key={index}
        className="b--black-10 bb bl bw1 dn db-l empty-day width-one-seventh-l"
      />,
    )
  }

  const emptyDays2 = Array(days).fill(
    <CalendarBox>
      <Text textAlign="center">Empty!</Text>
    </CalendarBox>,
  )
  return <Fragment>{emptyDays2}</Fragment>
}

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}

export default EmptyDays
