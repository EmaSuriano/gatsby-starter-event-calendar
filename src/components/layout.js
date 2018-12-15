import React from 'react'
import PropTypes from 'prop-types'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Helmet from './Helmet'
import ConfigContext from './ConfigContext'

const Layout = ({ children }) => (
  <ConfigContext.Consumer>
    {appConfig => {
      const { colors } = appConfig
      const theme = {
        ...grommet,
        global: {
          ...grommet.global,
          colors,
        },
      }
      return (
        <Grommet theme={theme}>
          <Helmet />
          {children}
        </Grommet>
      )
    }}
  </ConfigContext.Consumer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
