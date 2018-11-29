import { Box } from 'grommet'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CalendarBox = styled(Box).attrs({
  height: props => props.square && '8rem',
  pad: 'small',
  border: 'all',
})`
  width: calc(100% / 7);
`

CalendarBox.propTypes = {
  square: PropTypes.bool,
  children: PropTypes.node,
}

export default CalendarBox
