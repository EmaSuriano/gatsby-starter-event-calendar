import React from 'react'
import { Layer, Box, Text, Button, Anchor } from 'grommet'
import { FormClose } from 'grommet-icons'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Events from './Calendar/Events'
import Hover from './Hover'

const ModalEvent = ({ hideModal, currentDay, events }) => (
  <Layer
    position="center"
    onClickOutside={hideModal}
    onEsc={hideModal}
    responsive
    modal
  >
    <Box
      direction="row"
      align="center"
      tag="header"
      elevation="small"
      justify="between"
    >
      <Text margin={{ left: 'small' }}>
        {format(new Date(currentDay), 'dddd D, MMMM')}
      </Text>
      <Button icon={<FormClose />} onClick={hideModal} />
    </Box>
    <Box
      direction="column"
      align="center"
      tag="section"
      margin="medium"
      gap="small"
    >
      {[...events, ...events]
        .sort((eventA, eventB) => new Date(eventA.date) - new Date(eventB.date))
        .map(event => (
          <Box elevation="small" direction="row">
            <Text a11yTitle="time" margin="small">
              {format(new Date(event.date).setUTCMinutes(180), 'HH:mm')}
            </Text>
            <Box margin="small">
              <Text a11yTitle="event name" weight="bold" size="large">
                {event.eventName}
              </Text>
              {event.place && (
                <Text a11yTitle="event place">{event.place}</Text>
              )}
              <Hover>
                {({ hover }) => (
                  <Box
                    background="lightblue"
                    round="small"
                    pad="small"
                    margin="auto"
                    {...hover === true && {
                      animation: 'pulse',
                    }}
                  >
                    <Anchor
                      background="red"
                      href={event.eventLink}
                      label="Link"
                      a11yTitle="event link"
                      target="_blank"
                    />
                  </Box>
                )}
              </Hover>

              <div className="flex">
                <a
                  href={event.eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b b--black-30 ba bg-yellow-alternative br1 bw1 dib f6 flex grow items-center mt3 no-underline ph3 pv1 ttu white"
                >
                  <span className="f4 mr2 pt1">
                    <box-icon name="link-external" color="rgba(0, 0, 0, 0.3)" />
                  </span>
                  <span className="black-alternative text-shadow-1">Link</span>
                </a>
              </div>
            </Box>
          </Box>
        ))}
    </Box>
  </Layer>
)

ModalEvent.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentDay: PropTypes.string,
  events: Events.propTypes.events,
}

export default ModalEvent