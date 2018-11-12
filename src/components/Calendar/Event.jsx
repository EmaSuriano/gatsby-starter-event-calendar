import PropTypes from 'prop-types'
import React from 'react'

function eventMustBeHighlighted(eventName) {
  const eventNameUppercased = eventName.toUpperCase()
  const meetupJsUppercased = 'Meetup.js'.toUpperCase()
  const nodeConfArgentinaUppercased = 'NodeConf Argentina'.toUpperCase()

  return (
    eventNameUppercased.includes(meetupJsUppercased) ||
    eventNameUppercased.includes(nodeConfArgentinaUppercased)
  )
}

const Event = ({ event, index }) => {
  const { eventName } = event
  const highlight = eventMustBeHighlighted(eventName)
    ? 'b bg-yellow-alternative'
    : 'bg-washed-yellow'

  return (
    <li
      className={`${highlight} ${index > 1 ? 'dn-l' : ''} ${
        index > 0 ? 'mt2' : ''
      } b--black-10 ba black-alternative br1 bw1 f6 lh-solid pa1 text-shadow-1 truncate`}
    >
      {eventName}
    </li>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default Event
