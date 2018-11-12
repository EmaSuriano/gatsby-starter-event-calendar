import PropTypes from 'prop-types'
import React from 'react'

const Container = ({ large, ...rest }) => (
  <div
    className={`${large === 'large' ? 'mw9' : 'mw7'} center ph3 pv5`}
    {...rest}
  />
)

Container.propTypes = {
  large: PropTypes.string,
}

Container.defaultProps = {
  large: '',
}

export default Container
