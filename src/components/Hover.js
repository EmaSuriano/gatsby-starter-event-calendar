import React, { useState } from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

const Hover = ({ children }) => {
  const [hover, setHover] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children({ hover })}
    </Box>
  )
}

Hover.propTypes = {
  children: PropTypes.node,
}

export default Hover
