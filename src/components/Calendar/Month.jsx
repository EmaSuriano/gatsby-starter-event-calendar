import getDaysInMonth from 'date-fns/get_days_in_month'
import getISODay from 'date-fns/get_iso_day'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import React, { Component } from 'react'
import Days from './Days'
import EmptyDays from './EmptyDays'
import Events from './Events'
import Weekdays from './Weekdays'

const Month = ({ monthlyCalendar, showModal }) => {
  const [currentMonthNumber, currentYear] = monthlyCalendar.date.split('-')
  const monthDate = parseInt(currentMonthNumber, 10) - 1
  const today = new Date()
  const currentMonth = new Date(today.getFullYear(), monthDate, 1)
  const currentMonthIsoDay = getISODay(currentMonth)
  const currentMonthDays = getDaysInMonth(currentMonth)
  const emptyDaysAtEnd = 7 - ((currentMonthIsoDay + currentMonthDays) % 7)

  return (
    <div className="mt4">
      <h2 className="black-50 f4 f3-ns mb4 mt0 tc ttc">
        {format(new Date(currentYear, monthDate, 1), 'MMMM YYYY')}
      </h2>
      <Weekdays />
      <div className="b--black-10 br bt bw1 flex flex-wrap">
        {currentMonthIsoDay !== 7 && <EmptyDays days={currentMonthIsoDay} />}
        <Days
          days={currentMonthDays}
          month={currentMonth}
          events={monthlyCalendar.events}
          showModal={showModal}
        />
        {emptyDaysAtEnd !== 7 && <EmptyDays days={emptyDaysAtEnd} />}
      </div>
    </div>
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
