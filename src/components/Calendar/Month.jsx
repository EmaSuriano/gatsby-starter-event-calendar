import getDaysInMonth from 'date-fns/get_days_in_month';
import getISODay from 'date-fns/get_iso_day';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Days from './Days';
import EmptyDays from './EmptyDays';
import Events from './Events';
import Weekdays from './Weekdays';

class Month extends Component {
  static propTypes = {
    monthlyCalendar: PropTypes.shape({
      events: Events.propTypes.events,
      when: PropTypes.shape({
        month: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
      })
    }),
    showModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    monthlyCalendar: {
      events: [],
      when: {
        month: '',
        year: ''
      }
    }
  };

  getMonthNumber = monthName => {
    switch (monthName) {
      case 'enero':
        return 0;
      case 'febrero':
        return 1;
      case 'marzo':
        return 2;
      case 'abril':
        return 3;
      case 'mayo':
        return 4;
      case 'junio':
        return 5;
      case 'julio':
        return 6;
      case 'agosto':
        return 7;
      case 'septiembre':
        return 8;
      case 'octubre':
        return 9;
      case 'noviembre':
        return 10;
      case 'diciembre':
        return 11;
      default:
        return 12;
    }
  };

  render() {
    const { monthlyCalendar, showModal } = this.props;
    const currentMonthNumber = this.getMonthNumber(monthlyCalendar.when.month);
    const today = new Date();
    const currentMonth = new Date(today.getFullYear(), currentMonthNumber, 1);
    const currentMonthIsoDay = getISODay(currentMonth);
    const currentMonthDays = getDaysInMonth(currentMonth);
    const emptyDaysAtEnd = 7 - ((currentMonthIsoDay + currentMonthDays) % 7);

    return (
      <div className="mt4">
        <h2 className="black-50 f4 f3-ns mb4 mt0 tc ttc">
          <span>
            {monthlyCalendar.when.month}
            {' '}
          </span>
          <span>{monthlyCalendar.when.year}</span>
        </h2>
        <Weekdays />
        <div className="b--black-10 br bt bw1 flex flex-wrap">
          {currentMonthIsoDay !== 7 && <EmptyDays days={currentMonthIsoDay} />}
          <Days
            days={currentMonthDays}
            month={currentMonth}
            events={monthlyCalendar.events}
            showModal={showModal}
          />
          {emptyDaysAtEnd !== 7 && <EmptyDays days={emptyDaysAtEnd} />}
        </div>
      </div>
    );
  }
}

export default Month;
