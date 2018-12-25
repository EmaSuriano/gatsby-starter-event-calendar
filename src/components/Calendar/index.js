import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import { Box } from 'grommet'
import Month from './Month'
import groupEventsByMonth from '../../utils/groupEventsByMonth'
import ConfigContext from '../ConfigContext'

const Calendar = ({ showModal, query }) => (
  <Box animation="fadeIn" margin="medium" id="calendars">
    <ConfigContext.Consumer>
      {({ limitMonthInTheFuture }) => (
        <StaticQuery
          query={query}
          render={data => {
            const events = groupEventsByMonth(data, limitMonthInTheFuture)

            return events.map(monthlyCalendar => (
              <Month
                monthlyCalendar={monthlyCalendar}
                showModal={showModal}
                key={monthlyCalendar.date}
              />
            ))
          }}
        />
      )}
    </ConfigContext.Consumer>
  </Box>
)

Calendar.propTypes = {
  showModal: PropTypes.func.isRequired,
  query: PropTypes.string,
}

export default Calendar
