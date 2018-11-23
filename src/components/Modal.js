import { Layer, Box } from 'grommet'
import React from 'react'
import PropTypes from 'prop-types'

function Modal({ children, hideModal }) {
  return (
    <Layer
      position="center"
      responsive
      onClickOutside={hideModal}
      onEsc={hideModal}
    >
      <Box overflow="auto">{children}</Box>
    </Layer>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default Modal
