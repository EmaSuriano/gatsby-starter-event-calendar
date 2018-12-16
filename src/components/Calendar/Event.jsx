import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'

const Event = ({ children }) => (
  <Box
    margin={{ bottom: 'xsmall' }}
    round="xsmall"
    background="event-background"
    pad="xsmall"
  >
    <Text size="small" truncate color="event-font-color">
      {children}
    </Text>
  </Box>
)

Event.propTypes = {
  children: PropTypes.node,
}

export default Event
