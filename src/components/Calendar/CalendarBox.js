import { Box } from 'grommet'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CalendarBox = styled(Box).attrs({
  height: props => props.square && '8rem',
  pad: 'small',
  border: 'all',
})`
  cursor: ${props => props.onClick ? 'pointer' : 'inherit'};
  width: calc(100% / 7);
  
  @media only screen and
    (max-width: 768px) {
    width: 100%;
    height: inherit;
  }
`

CalendarBox.propTypes = {
  square: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default CalendarBox
