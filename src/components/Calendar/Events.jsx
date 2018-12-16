import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box, css } from 'grommet'
import Event from './Event'
import ConfigContext from '../ConfigContext'

const Events = ({ events }) =>
  events.length > 0 && (
    <ConfigContext.Consumer>
      {({ maxAmountEvents }) => {
        const availableEvents = events.slice(0, maxAmountEvents + 1)
        return (
          <Box
            gap="xsmall"
            pad="none"
            tag="ul"
            css={css`
              list-style: none;
            `}
          >
            {availableEvents.map((event, i) => (
              <li key={event.id}>
                {i < maxAmountEvents && <Event>{event.eventName}</Event>}
                {i === maxAmountEvents && (
                  <Text size="small" truncate>
                    {`And ${events.length - maxAmountEvents} more ...`}
                  </Text>
                )}
              </li>
            ))}
          </Box>
        )
      }}
    </ConfigContext.Consumer>
  )

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
