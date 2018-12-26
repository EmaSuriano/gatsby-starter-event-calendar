import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'

const Event = ({ name }) => (
  <Box round="xsmall" background="calendar-event-background" pad="2px">
    <Text
      size="small"
      truncate
      color="calendar-event-text"
      a11yTitle="Event name"
    >
      {name}
    </Text>
  </Box>
)

Event.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Event
