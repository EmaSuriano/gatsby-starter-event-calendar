import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box, css, ResponsiveContext } from 'grommet'
import Event from './Event'
import ConfigContext from '../ConfigContext'

const Events = ({ events }) =>
  events.length > 0 && (
    <ResponsiveContext.Consumer>
      {size => (
        <ConfigContext.Consumer>
          {({ maxAmountEvents }) => (
            <Box
              gap={size === 'small' ? 'small' : 'xsmall'}
              pad="none"
              tag="ul"
              overflow="auto"
              css={css`
                list-style: none;
              `}
            >
              {events.slice(0, maxAmountEvents + 1).map((event, i) => (
                <Box tag="li" key={event.id}>
                  {i < maxAmountEvents && <Event name={event.eventName} />}
                  {i === maxAmountEvents && (
                    <Text size="small" truncate>
                      {`And ${events.length - maxAmountEvents} more ...`}
                    </Text>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </ConfigContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  )

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
