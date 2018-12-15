import React from 'react'
import PropTypes from 'prop-types'
import appConfig from '../../appConfig'

const { Provider, Consumer } = React.createContext()

const ConfigProvider = ({ children }) => (
  <Provider value={appConfig}>{children}</Provider>
)

ConfigProvider.propTypes = {
  children: PropTypes.node,
}

const ConfigContext = {
  Provider: ConfigProvider,
  Consumer,
}

export default ConfigContext
