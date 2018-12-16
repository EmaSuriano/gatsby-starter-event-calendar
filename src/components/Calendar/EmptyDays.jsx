import PropTypes from 'prop-types'
import React from 'react'
import CalendarBox from './CalendarBox'
import Query from '../Query'

const EmptyDays = ({ days }) => (
  <Query sizes={['small']} inverse>
    {Array(days).fill(
      <CalendarBox
        background="empty-day-background"
        border={{ color: 'empty-day-border-color' }}
        square
      />,
    )}
  </Query>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}

export default EmptyDays
