import isBefore from 'date-fns/is_before'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, ResponsiveContext, Box } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import Event from './Event'
import Query from '../Query'
import CalendarBox from './CalendarBox'

const isVisibleInMobile = (currentDay, today) =>
  isBefore(today, currentDay) || isSameDay(today, currentDay)

const getEventsOfTheDay = (eventsInMonth, day) =>
  eventsInMonth.filter(event => isSameDay(event.date, day))

const getStrike = (currentDay, today) =>
  isBefore(currentDay, today) && !isSameDay(currentDay, today)

const Day = ({ day, events, showModal }) => {
  const today = new Date()

  const isToday = isSameDay(day, today)
  const hasPast = isBefore(day, today)

  const background = (isToday && 'primary') || (hasPast && 'disabled')
  const visibleInMobile = isVisibleInMobile(day, today)
  const eventsOfTheDay = getEventsOfTheDay(events, day)
  const onClick = () => showModal(eventsOfTheDay, day)

  return [
    <Query sizes={['small']} inverse>
      <CalendarBox
        key={day.getTime()}
        background={background}
        {...eventsOfTheDay.length && { onClick }}
        square
      >
        <Box direction="column" fill="vertical">
          <Box direction="column" fill="horizontal">
            <Events events={eventsOfTheDay} />
          </Box>
          <Box
            direction="column"
            margin={{ top: 'auto' }}
            width="xsmall"
            alignSelf="end"
          >
            <Text
              color={isToday && 'green'}
              size="large"
              textAlign="end"
              css={css`
                text-decoration: ${getStrike(day, today) && 'line-through'};
              `}
            >
              {format(day, 'DD')}
            </Text>
          </Box>
        </Box>
      </CalendarBox>
    </Query>,
    <Query sizes={['small']}>
      {visibleInMobile && (
        <CalendarBox
          key={day.getTime()}
          background={background}
          {...eventsOfTheDay.length && { onClick }}
          square
        >
          <Box direction="row" fill="vertical">
            <Box
              direction="column"
              margin={{ top: 'auto' }}
              width="xsmall"
              alignSelf="end"
              pad="small"
            >
              <Text
                color={isSameDay(day, today) && 'green'}
                size="large"
                textAlign="start"
                css={css`
                  text-decoration: ${getStrike(day, today) && 'line-through'};
                `}
              >
                {format(day, 'DD')}
              </Text>

              <Text
                color={isSameDay(day, today) && 'green'}
                size="small"
                truncate
              >
                {format(day, 'dddd')}
              </Text>
            </Box>

            <Box direction="column" fill="horizontal" pad="small">
              <Events events={eventsOfTheDay} />
            </Box>
          </Box>
        </CalendarBox>
      )}
    </Query>,
  ]

  return (
    <ResponsiveContext.Consumer>
      {size =>
        (size !== 'small' || (size === 'small' && visibleInMobile)) && (
          <CalendarBox
            key={day.getTime()}
            background={background}
            {...eventsOfTheDay.length && { onClick }}
            square
          >
            <Box
              direction={size === 'small' ? 'row' : 'column'}
              fill="vertical"
            >
              <Box
                direction="column"
                margin={{ top: 'auto' }}
                width="xsmall"
                alignSelf="end"
                css={css`
                  order: 1;
                `}
              >
                <Text
                  color={isSameDay(day, today) && 'green'}
                  size="large"
                  textAlign={size === 'small' ? 'start' : 'end'}
                  css={css`
                    text-decoration: ${getStrike(day, today) && 'line-through'};
                  `}
                >
                  {format(day, 'DD')}
                </Text>

                <Query sizes={['small']}>
                  <Text
                    color={isSameDay(day, today) && 'green'}
                    size="small"
                    truncate
                  >
                    {format(day, 'dddd')}
                  </Text>
                </Query>
              </Box>

              <Box
                direction="column"
                fill="horizontal"
                pad={{ left: size === 'small' && 'medium' }}
                css={css`
                  order: ${size === 'small' ? 1 : 0};
                `}
              >
                {eventsOfTheDay.length > 0 && (
                  <Events events={eventsOfTheDay} />
                )}
              </Box>
            </Box>
          </CalendarBox>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

const Days = ({ days, events, month, showModal }) =>
  Array(days)
    .fill(null)
    .map((x, i) => {
      const currentDay = new Date(month.getFullYear(), month.getMonth(), i + 1)
      const eventsOfTheDay = getEventsOfTheDay(events, currentDay)

      return (
        <Day day={currentDay} events={eventsOfTheDay} showModal={showModal} />
      )
    })

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.array,
  month: PropTypes.instanceOf(Date).isRequired,
  showModal: PropTypes.func.isRequired,
}

export default Days
