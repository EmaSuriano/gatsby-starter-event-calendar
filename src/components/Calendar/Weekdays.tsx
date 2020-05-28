import React from 'react';
import { Box, Text } from 'grommet';
import CalendarBox from './CalendarBox';

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Weekdays = () => (
  <Box direction="row" wrap>
    {WEEKDAYS.map((weekday) => (
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
);

export default Weekdays;
