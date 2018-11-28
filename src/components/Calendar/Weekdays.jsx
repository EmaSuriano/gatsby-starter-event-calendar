import React from 'react'
import { Box, Text, ResponsiveContext } from 'grommet'
import { format, eachDay, startOfWeek, endOfWeek } from 'date-fns'
import CalendarBox from './CalendarBox'

const getWeekdays = () => {
  const now = new Date()
  const weekdays = eachDay(startOfWeek(now), endOfWeek(now)).map(day =>
    format(day, 'dddd'),
  )
  return weekdays
}

const Weekdays = () => {
  const weekdays = getWeekdays()
  return (
    <ResponsiveContext.Consumer>
      {size =>
        size !== 'small' && (
          <Box border="all" direction="row" wrap>
            {weekdays.map(weekday => (
              <CalendarBox>
                <Text textAlign="center">{weekday}</Text>
              </CalendarBox>
            ))}
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default Weekdays
