import React from 'react'
import { Box, Text } from 'grommet'
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
    <Box direction="row" wrap>
      {weekdays.map(weekday => (
        <CalendarBox
          border={{ color: 'calendar-weekdays-border' }}
          background="calendar-weekdays-background"
          pad="small"
          key={weekday}
        >
          <Text
            textAlign="center"
            color="calendar-weekdays-text"
            truncate
            a11yTitle={weekday}
          >
            {weekday}
          </Text>
        </CalendarBox>
      ))}
    </Box>
  )
}

export default Weekdays
