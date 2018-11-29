import PropTypes from 'prop-types'
import React from 'react'
import { ResponsiveContext } from 'grommet'
import CalendarBox from './CalendarBox'

const EmptyDays = ({ days }) => (
  <ResponsiveContext.Consumer>
    {size =>
      size !== 'small' &&
      Array(days).fill(
        <CalendarBox background="theme.global.colors.background" square />,
      )
    }
  </ResponsiveContext.Consumer>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}

export default EmptyDays
