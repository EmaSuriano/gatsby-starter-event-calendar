import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DayFooter from './DayFooter';
import Events from './Events';
import Event from './Event';

class Days extends Component {
  static propTypes = {
    days: PropTypes.number.isRequired,
    events: PropTypes.arrayOf(Event.propTypes.event).isRequired,
    month: PropTypes.instanceOf(Date).isRequired,
    showModal: PropTypes.func.isRequired
  };

  getBgColor = (currentDay, today) => {
    if (isSameDay(currentDay, today)) {
      return 'bg-washed-green';
    }

    if (isBefore(currentDay, today)) {
      return 'bg-near-white';
    }

    return '';
  };

  getDayName = dayNumberOfTheWeek => {
    switch (dayNumberOfTheWeek) {
      case 0:
        return 'domingo';
      case 1:
        return 'lunes';
      case 2:
        return 'martes';
      case 3:
        return 'miércoles';
      case 4:
        return 'jueves';
      case 5:
        return 'viernes';
      case 6:
        return 'sábado';
      default:
        return '';
    }
  };

  getEventsOfTheDay = (eventsInMonth, day) =>
    eventsInMonth.filter(event => isSameDay(event.date, day));

  getStrike = (currentDay, today) => isBefore(currentDay, today) && !isSameDay(currentDay, today);

  isVisibleInMobile = (currentDay, today) =>
    isBefore(today, currentDay) || isSameDay(today, currentDay);

  render() {
    const { days, events, month, showModal } = this.props;
    const elements = [];

    for (let index = 0; index < days; index += 1) {
      const currentDayNumber = index + 1;
      const currentDay = new Date(month.getFullYear(), month.getMonth(), currentDayNumber);
      const today = new Date();

      const bgColor = this.getBgColor(currentDay, today);
      const isVisibleInMobile = this.isVisibleInMobile(currentDay, today);
      const eventsOfTheDay = this.getEventsOfTheDay(events, currentDay);

      elements.push(
        <div
          key={currentDay.getTime()}
          className={`${bgColor || ''} ${eventsOfTheDay.length ? 'pointer' : ''} ${
            isVisibleInMobile ? '' : 'dn db-l'
          } b--black-10 bb bl bw1 h4-l ph3 pv2 pa2-l w-100 width-one-seventh-l`}
          onClick={() => eventsOfTheDay.length && showModal(eventsOfTheDay, currentDay)}
          role="presentation"
        >
          <div className="flex flex-column-l h-100 items-center items-end-l">
            <div className="flex-auto order-1 order-0-l pl3 pl0-l w-80 w-100-l">
              {eventsOfTheDay.length ? <Events events={eventsOfTheDay} /> : null}
            </div>
            <DayFooter
              dayNumber={currentDay.getDate()}
              dayName={this.getDayName(currentDay.getDay())}
              isToday={isSameDay(currentDay, today)}
              strike={this.getStrike(currentDay, today)}
            />
          </div>
        </div>
      );
    }

    return elements;
  }
}

export default Days;
