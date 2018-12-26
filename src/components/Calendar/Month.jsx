import React from 'react'
import { getDaysInMonth, getISODay, format } from 'date-fns'
import { Heading, Box } from 'grommet'
import PropTypes from 'prop-types'
import Days from './Days'
import EmptyDays from './EmptyDays'
import Events from './Events'
import Weekdays from './Weekdays'
import Query from '../Query'

const Month = ({ monthlyCalendar, showModal }) => {
  const [currentMonthNumber, currentYear] = monthlyCalendar.date.split('-')

  const currentMonth = new Date(
    currentYear,
    parseInt(currentMonthNumber, 10) - 1,
    1,
  )
  const currentMonthIsoDay = getISODay(currentMonth)
  const currentMonthDays = getDaysInMonth(currentMonth)
  const emptyDaysAtEnd = 7 - ((currentMonthIsoDay + currentMonthDays) % 7)

  return (
    <Box margin={{ bottom: 'medium' }}>
      <Heading a11yTitle={`Month of ${format(currentMonth, 'MMMM YYYY')}`}>
        <b>{`${format(currentMonth, 'MMMM')} `}</b>
        {format(currentMonth, 'YYYY')}
      </Heading>
      <Query sizes={['small']} inverse>
        <Weekdays />
      </Query>
      <Box direction="row" wrap>
        {currentMonthIsoDay !== 7 && <EmptyDays days={currentMonthIsoDay} />}
        <Days
          days={currentMonthDays}
          month={currentMonth}
          events={monthlyCalendar.events}
          showModal={showModal}
        />
        {emptyDaysAtEnd !== 7 && <EmptyDays days={emptyDaysAtEnd} />}
      </Box>
    </Box>
  )
}

Month.propTypes = {
  monthlyCalendar: PropTypes.shape({
    events: Events.propTypes.events,
    when: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  }),
  showModal: PropTypes.func.isRequired,
}

Month.defaultProps = {
  monthlyCalendar: {
    events: [],
    when: {
      month: '',
      year: '',
    },
  },
}

export default Month
