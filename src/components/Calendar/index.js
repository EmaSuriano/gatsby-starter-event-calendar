import React from 'react'
import PropTypes from 'prop-types'
import Month from './Month'

const Calendar = ({ showModal, events }) =>
  events.map(monthlyCalendar => (
    <Month
      monthlyCalendar={monthlyCalendar}
      showModal={showModal}
      key={monthlyCalendar.date}
    />
  ))

Calendar.propTypes = {
  showModal: PropTypes.func.isRequired,
  query: PropTypes.string,
}

export default Calendar
