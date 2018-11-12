import PropTypes from 'prop-types'
import React from 'react'
import Container from './Container'

const MessageWithAction = ({
  action,
  actionMessage,
  image,
  imageAlt,
  message,
}) => (
  <Container>
    <div className="tc">
      <h2 className="black-alternative mb4 mt0 normal">{message}</h2>
      <img src={image} alt={imageAlt} className="db center m-h5 mb4" />
      <button
        className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow no-underline ph3 pointer pv2 ttu"
        onClick={action}
        type="button"
      >
        {actionMessage}
      </button>
    </div>
  </Container>
)

MessageWithAction.propTypes = {
  action: PropTypes.func.isRequired,
  actionMessage: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  message: PropTypes.string.isRequired,
}

MessageWithAction.defaultProps = {
  image: '',
  imageAlt: '',
}

export default MessageWithAction
