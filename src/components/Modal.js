import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
    hideModal: PropTypes.func.isRequired
  };

  closeModalOnEscapeKey = event => {
    const { hideModal } = this.props;

    return event.which === 27 && hideModal();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.closeModalOnEscapeKey);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeModalOnEscapeKey);
  };

  handleClose = event => {
    const { hideModal } = this.props;

    return event.target === event.currentTarget && hideModal();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className="bg-black-70 fade-in fixed flex items-center justify-center left-0 pointer top-0 vh-100 w-100 z-4"
        onClick={this.handleClose}
        role="presentation"
      >
        <div className="center cursor-default fade-in-down mw7 w-100">{children}</div>
      </div>
    );
  }
}

export default Modal;
