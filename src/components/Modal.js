import { Layer, Box, Text, Button } from 'grommet'
import { FormClose } from 'grommet-icons'
import React from 'react'
import PropTypes from 'prop-types'

function Modal({ children, hideModal, title }) {
  return (
    <Layer
      position="center"
      responsive
      onClickOutside={hideModal}
      onEsc={hideModal}
    >
      <Box
        direction="row"
        align="center"
        tag="header"
        elevation="small"
        justify="between"
      >
        <Text margin={{ left: 'small' }}>{title}</Text>
        <Button icon={<FormClose />} onClick={hideModal} />
      </Box>
      <Box>{children}</Box>
    </Layer>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Modal
