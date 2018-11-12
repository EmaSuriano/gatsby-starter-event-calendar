import PropTypes from 'prop-types'
import React, { Component } from 'react'

class FormatDate extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  }

  format = date =>
    [
      this.getDayName(date.getDay()),
      ' ',
      date.getDate(),
      ' de ',
      this.getMonthName(date.getMonth()),
      ' de ',
      date.getFullYear(),
    ].join(' ')

  getDayName = day => {
    switch (day) {
      case 0:
        return 'Domingo'
      case 1:
        return 'Lunes'
      case 2:
        return 'Martes'
      case 3:
        return 'Miércoles'
      case 4:
        return 'Jueves'
      case 5:
        return 'Viernes'
      case 6:
        return 'Sábado'
      default:
        return ''
    }
  }

  getMonthName = month => {
    switch (month) {
      case 0:
        return 'Enero'
      case 1:
        return 'Febrero'
      case 2:
        return 'Marzo'
      case 3:
        return 'Abril'
      case 4:
        return 'Mayo'
      case 5:
        return 'Junio'
      case 6:
        return 'Julio'
      case 7:
        return 'Agosto'
      case 8:
        return 'Septiembre'
      case 9:
        return 'Octubre'
      case 10:
        return 'Noviembre'
      case 11:
        return 'Diciembre'
      default:
        return ''
    }
  }

  render() {
    const { date } = this.props

    return <strong>{this.format(date)}</strong>
  }
}

export default FormatDate
