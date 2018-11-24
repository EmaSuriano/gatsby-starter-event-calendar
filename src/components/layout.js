import React from 'react'
import PropTypes from 'prop-types'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Helmet from './Helmet'
import 'tachyons/css/tachyons.min.css'
import './moarStyles.css'

const Layout = ({ children }) => (
  <Grommet theme={grommet}>
    <Helmet />

    {children}
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
