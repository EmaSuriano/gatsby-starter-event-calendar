import PropTypes from 'prop-types'
import React from 'react'
import Event from './Event'

const Events = ({ events }) => {
  const thereAreMoreEventsLabel = events.length > 2 && (
    <span className="black-alternative dn f6 mt2 truncate db-l">
      <span>y </span>
      <span>{events.length - 2}</span>
      <span> más</span>
    </span>
  )

  console.log(events)

  return (
    <>
      <ul className="list ma0 pl0">
        {events.map(event => (
          <Event key={event.shortid}>{event.eventName}</Event>
        ))}
      </ul>
      {thereAreMoreEventsLabel}
    </>
  )
}

Events.propTypes = {}

export default Events
