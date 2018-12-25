import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'

const Event = ({ children }) => (
  <Box round="xsmall" background="calendar-event-background" pad="2px">
    <Text size="small" truncate color="calendar-event-text">
      {children}
    </Text>
  </Box>
)

Event.propTypes = {
  children: PropTypes.node,
}

export default Event
