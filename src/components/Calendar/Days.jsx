import isBefore from 'date-fns/is_before'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, ResponsiveContext, Box } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import Event from './Event'

const getBgColor = (currentDay, today) =>
  (isSameDay(currentDay, today) && 'lightgreen') ||
  (isBefore(currentDay, today) && 'gray')

const isVisibleInMobile = (currentDay, today) =>
  isBefore(today, currentDay) || isSameDay(today, currentDay)

const getEventsOfTheDay = (eventsInMonth, day) =>
  eventsInMonth.filter(event => isSameDay(event.date, day))

const getStrike = (currentDay, today) =>
  isBefore(currentDay, today) && !isSameDay(currentDay, today)

const Day = ({ day, events, showModal }) => {
  const today = new Date()

  const bgColor = getBgColor(day, today)
  const visibleInMobile = isVisibleInMobile(day, today)
  const eventsOfTheDay = getEventsOfTheDay(events, day)
  const onClick = () => eventsOfTheDay.length && showModal(eventsOfTheDay, day)
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          key={day.getTime()}
          className={`${
            visibleInMobile ? '' : 'dn db-l'
          } b--black-10 bb bl bw1 h4-l ph3 pv2 pa2-l w-100 width-one-seventh-l`}
          onClick={onClick}
          css={css`
            cursor: ${eventsOfTheDay.length && 'pointer'};
          `}
          background={bgColor}
        >
          <div className="flex flex-column-l h-100 items-center items-end-l">
            <div className="flex-auto order-1 order-0-l pl3 pl0-l w-80 w-100-l">
              {eventsOfTheDay.length > 0 && <Events events={eventsOfTheDay} />}
            </div>
            <Box direction="column">
              <Text
                color={isSameDay(day, today) && 'green'}
                size="large"
                css={css`
                  text-decoration: ${getStrike(day, today) && 'line-through'};
                `}
              >
                {format(day, 'DD')}
              </Text>

              {size === 'small' && (
                <Text color={isSameDay(day, today) && 'green'} size="small">
                  {format(day, 'dddd')}
                </Text>
              )}
            </Box>
          </div>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

const Days = ({ days, events, month, showModal }) =>
  Array(days)
    .fill(null)
    .map((x, i) => {
      const currentDay = new Date(month.getFullYear(), month.getMonth(), i + 1)
      const eventsOfTheDay = getEventsOfTheDay(events, currentDay)

      return (
        <Day day={currentDay} events={eventsOfTheDay} showModal={showModal} />
      )
    })

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(Event.propTypes.event).isRequired,
  month: PropTypes.instanceOf(Date).isRequired,
  showModal: PropTypes.func.isRequired,
}

// class Days extends Component {
//   static propTypes = {
//     days: PropTypes.number.isRequired,
//     events: PropTypes.arrayOf(Event.propTypes.event).isRequired,
//     month: PropTypes.instanceOf(Date).isRequired,
//     showModal: PropTypes.func.isRequired,
//   }

//   render() {
//     const { days, events, month, showModal } = this.props

//     const filledDays = Array(days)
//       .fill(null)
//       .map((x, i) => {
//         const currentDay = new Date(
//           month.getFullYear(),
//           month.getMonth(),
//           i + 1,
//         )

//         const eventsOfTheDay = this.getEventsOfTheDay(events, currentDay)

//         return (
//           <Day day={currentDay} events={eventsOfTheDay} showModal={showModal} />
//         )
//       })

//     return filledDays

//   }
// }

export default Days
