import React from 'react'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Helmet from './Helmet'
import ConfigContext from './ConfigContext'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Layout = ({ children }) => (
  <ConfigContext.Provider>
    <GlobalStyle />
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
          <Grommet
            theme={theme}
            full
            css={css`
              scroll-behavior: smooth;
              overflow-y: scroll;
            `}
          >
            <Helmet />
            {children}
          </Grommet>
        )
      }}
    </ConfigContext.Consumer>
  </ConfigContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
