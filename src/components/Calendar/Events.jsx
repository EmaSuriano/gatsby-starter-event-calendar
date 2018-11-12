import PropTypes from 'prop-types'
import React from 'react'
import Event from './Event'

function eventMustBeHighlighted(eventName) {
  const eventNameUppercased = eventName.toUpperCase()
  const meetupJsUppercased = 'Meetup.js'.toUpperCase()
  const nodeConfArgentinaUppercased = 'NodeConf Argentina'.toUpperCase()

  return (
    eventNameUppercased.includes(meetupJsUppercased) ||
    eventNameUppercased.includes(nodeConfArgentinaUppercased)
  )
}

const Events = ({ events }) => {
  const thereAreMoreEventsLabel = events.length > 2 && (
    <span className="black-alternative dn f6 mt2 truncate db-l">
      <span>y </span>
      <span>{events.length - 2}</span>
      <span> más</span>
    </span>
  )

  const sortedEvents = events.sort((eventA, eventB) => {
    if (eventMustBeHighlighted(eventA.eventName)) return -1
    if (eventMustBeHighlighted(eventB.eventName)) return 1

    return 0
  })

  return (
    <>
      <ul className="list ma0 pl0">
        {sortedEvents.map((event, index) => (
          <Event key={event.shortid} event={event} index={index} />
        ))}
      </ul>
      {thereAreMoreEventsLabel}
    </>
  )
}

Events.propTypes = {
  events: PropTypes.arrayOf(Event.propTypes.event).isRequired,
}

export default Events
