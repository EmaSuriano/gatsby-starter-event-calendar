import React, { Component } from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

 class Hover extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    hover: false,
  }

  onHover = hover => () => this.setState({ hover })

  render() {
    const { children } = this.props
    const { hover } = this.state
    return (
      <Box onMouseEnter={this.onHover(true)} onMouseLeave={this.onHover(false)}>
        {children({ hover })}
      </Box>
    )
  }
}

export default Hover
