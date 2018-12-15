import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'grommet'
import styled from 'styled-components'
import Event from './Event'
import ConfigContext from '../ConfigContext'

const EventList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Events = ({ events }) =>
  events.length > 0 && (
    <ConfigContext.Consumer>
      {({ maxAmountEvents }) => {
        const availableEvents = events.slice(0, maxAmountEvents + 1)
        return (
          <EventList>
            {availableEvents.map((event, i) => (
              <li key={event.shortid}>
                {i < maxAmountEvents && <Event>{event.eventName}</Event>}
                {i === maxAmountEvents && (
                  <Text size="small" truncate>
                    {`And ${events.length - maxAmountEvents} more ...`}
                  </Text>
                )}
              </li>
            ))}
          </EventList>
        )
      }}
    </ConfigContext.Consumer>
  )

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
