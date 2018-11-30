import React from 'react'
import { ResponsiveContext } from 'grommet'
import PropTypes from 'prop-types'

const Query = ({ sizes, children, inverse }) => (
  <ResponsiveContext.Consumer>
    {size => {
      const match = sizes.includes(size)
      return inverse ? !match && children : match && children
    }}
  </ResponsiveContext.Consumer>
)

Query.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  inverse: PropTypes.bool,
}

export default Query
