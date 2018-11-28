import React from 'react'
import { Box } from 'grommet'
import { css } from 'styled-components'
import PropTypes from 'prop-types'

const CalendarBox = ({ square, children }) => (
  <Box
    pad="small"
    border="all"
    css={css`
      width: calc(100% / 7);
    `}
  >
    {children}
  </Box>
)

CalendarBox.propTypes = {
  square: PropTypes.bool,
  children: PropTypes.node,
}

export default CalendarBox
