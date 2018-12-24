import isBefore from 'date-fns/is_before'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import Query from '../Query'
import CalendarBox from './CalendarBox'

const getStrike = (currentDay, today) =>
  isBefore(currentDay, today) && !isSameDay(currentDay, today)

const Day = ({ day, events, onClick }) => {
  const today = new Date()

  const isToday = isSameDay(day, today)
  const hasPast = isBefore(day, today)

  const dayType = (isToday && 'today') || (hasPast && 'past-day') || 'day'

  const eventsSection = (
    <Box direction="column" fill="horizontal">
      <Events events={events} />
    </Box>
  )

  return [
    <Query sizes={['small']} inverse>
      <CalendarBox
        key={day.getTime()}
        background={`${dayType}-background`}
        {...events.length && { onClick }}
        border={{ color: 'calendar-border-color' }}
        pad="xsmall"
        square
      >
        <Box direction="column" fill="vertical">
          {eventsSection}
          <Box
            direction="column"
            margin={{ top: 'auto' }}
            width="xsmall"
            alignSelf="end"
          >
            <Text
              color={`${dayType}-font-color`}
              size="large"
              textAlign="end"
              css={css`
                text-decoration: ${hasPast && !isToday && 'line-through'};
              `}
            >
              {format(day, 'DD')}
            </Text>
          </Box>
        </Box>
      </CalendarBox>
    </Query>,
    <Query sizes={['small']}>
      {(!hasPast || isToday) && (
        <CalendarBox
          key={day.getTime()}
          background={`${dayType}-background`}
          border={{ color: 'calendar-border-color' }}
          pad="small"
          {...events.length && { onClick }}
          square
        >
          <Box direction="row" fill="vertical">
            <Box
              direction="column"
              margin={{ top: 'auto' }}
              width="xsmall"
              alignSelf="end"
            >
              <Text
                color={`${dayType}-font-color`}
                size="large"
                textAlign="start"
                css={css`
                  text-decoration: ${getStrike(day, today) && 'line-through'};
                `}
              >
                {format(day, 'DD')}
              </Text>

              <Text color={`${dayType}-font-color`} size="small" truncate>
                {format(day, 'dddd')}
              </Text>
            </Box>
            {eventsSection}
          </Box>
        </CalendarBox>
      )}
    </Query>,
  ]
}

const Days = ({ days, events, month, showModal }) =>
  Array(days)
    .fill(null)
    .map((x, i) => {
      const currentDay = new Date(month.getFullYear(), month.getMonth(), i + 1)
      const eventsOfTheDay = events.filter(event =>
        isSameDay(event.date, currentDay),
      )
      const onClick = () => showModal(eventsOfTheDay, currentDay)

      return (
        <Day
          key={format(currentDay, 'DD-MM-YY')}
          day={currentDay}
          events={eventsOfTheDay}
          onClick={onClick}
        />
      )
    })

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.array,
  month: PropTypes.instanceOf(Date).isRequired,
  showModal: PropTypes.func.isRequired,
}

export default Days
