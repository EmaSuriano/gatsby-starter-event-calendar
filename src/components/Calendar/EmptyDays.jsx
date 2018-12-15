import PropTypes from 'prop-types'
import React from 'react'
import CalendarBox from './CalendarBox'
import Query from '../Query'

const EmptyDays = ({ days }) => (
  <Query sizes={['small']} inverse>
    {Array(days).fill(
      <CalendarBox background="emptyDay" square />,
    )}
  </Query>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}

export default EmptyDays
