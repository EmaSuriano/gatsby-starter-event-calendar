import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'

const Event = ({ children }) => (
  <Box margin={{ bottom: 'xsmall' }} round="xsmall" background="secondary" pad="xsmall">
    <Text size="small" truncate>
      {children}
    </Text>
  </Box>
)

Event.propTypes = {
  children: PropTypes.node,
}

export default Event
