import React from 'react'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Modal from './Modal'
import Events from './Calendar/Events'

const ModalEvent = ({ hideModal, currentDay, events }) => (
  <Modal
    hideModal={hideModal}
    title={format(new Date(currentDay).setUTCMinutes(180), 'dddd D, MMMM')}
  >
    <div className="bg-white br2 ma3">
      <div className="m-vh-75 overflow-y-auto">
        {events
          .sort(
            (eventA, eventB) => new Date(eventA.date) - new Date(eventB.date),
          )
          .map(event => (
            <div key={event.eventName} className="flex mh3 mv3 pv3">
              <div className="pr3 pr4-ns">
                <p className="black-50 f5 f4-ns mv0">
                  {format(new Date(event.date).setUTCMinutes(180), 'HH:mm')}
                </p>
              </div>
              <div className="flex-auto">
                <h3 className="black-alternative f5 f4-ns mv0">
                  {event.eventName}
                </h3>
                {event.place && (
                  <p className="black-50 mb0 mt2">{event.place}</p>
                )}
                <div className="flex">
                  <a
                    href={event.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b b--black-30 ba bg-yellow-alternative br1 bw1 dib f6 flex grow items-center mt3 no-underline ph3 pv1 ttu white"
                  >
                    <span className="f4 mr2 pt1">
                      <box-icon
                        name="link-external"
                        color="rgba(0, 0, 0, 0.3)"
                      />
                    </span>
                    <span className="black-alternative text-shadow-1">
                      Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </Modal>
)

ModalEvent.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentDay: PropTypes.string,
  events: Events.propTypes.events,
}

export default ModalEvent
