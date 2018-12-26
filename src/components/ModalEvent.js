import React from 'react'
import { Layer, Box, Text, Button } from 'grommet'
import { FormClose } from 'grommet-icons'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Events from './Calendar/Events'

const sortyByDate = (eventA, eventB) =>
  new Date(eventA.date) - new Date(eventB.date)

const ModalEvent = ({ hideModal, currentDay, events }) => (
  <Layer position="center" onClickOutside={hideModal} onEsc={hideModal} modal>
    <Box
      direction="row"
      align="center"
      tag="header"
      elevation="small"
      justify="between"
    >
      <Text
        margin={{ left: 'small' }}
        color="calendar-modal-text"
        a11yTitle="Selected day"
      >
        <b>{format(new Date(currentDay), 'dddd D, MMMM')}</b>
      </Text>
      <Button
        icon={<FormClose />}
        a11yTitle="Close popup button"
        onClick={hideModal}
      />
    </Box>
    <Box
      direction="column"
      align="center"
      tag="section"
      margin="medium"
      gap="small"
    >
      {events.sort(sortyByDate).map(event => (
        <Box
          elevation="small"
          direction="row"
          fill="horizontal"
          background="calendar-modal-background"
        >
          <Text
            a11yTitle="Event time"
            margin="small"
            color="calendar-modal-text"
          >
            {format(new Date(event.date).setUTCMinutes(180), 'HH:mm')}
          </Text>
          <Box margin="small">
            <Text
              a11yTitle="Event name"
              weight="bold"
              size="large"
              color="calendar-modal-text"
            >
              {event.eventName}
            </Text>

            {event.place && (
              <Text a11yTitle="Event place" color="calendar-modal-text">
                {event.place}
              </Text>
            )}

            <Box margin={{ top: 'medium' }} width="xsmall">
              <Button
                href={event.eventLink}
                label="Link"
                a11yTitle="Event link"
                target="_blank"
                primary
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Layer>
)

ModalEvent.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentDay: PropTypes.objectOf(Date),
  events: Events.propTypes.events,
}

export default ModalEvent
