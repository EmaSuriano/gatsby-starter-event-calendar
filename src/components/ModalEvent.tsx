import React, { ReactNode, Fragment } from 'react';
import { Layer, Box, Text, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import { format } from 'date-fns';

type Props = ModalData & {
  onClose: () => void;
};

const ModalEvent = ({ onClose, date, events }: Props) => (
  <Layer position="center" onClickOutside={onClose} onEsc={onClose} modal>
    <Header onClick={onClose}>{format(date, 'cccc d, MMMM')}</Header>
    <Box direction="column" align="center" tag="section" margin="small">
      {events.map((event, i, arr) => (
        <Fragment key={event.id}>
          <EventDescription event={event} />
          {i !== arr.length - 1 && (
            <Box
              margin={{ vertical: 'small' }}
              background="calendar-modal-separator"
              height="3px"
              width="100%"
              style={{ borderRadius: '50%' }}
            />
          )}
        </Fragment>
      ))}
    </Box>
  </Layer>
);

type HeaderProps = {
  children: ReactNode;
  onClick: () => void;
};

const Header = ({ onClick, children }: HeaderProps) => (
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
      <b>{children}</b>
    </Text>
    <Button
      icon={<FormClose />}
      a11yTitle="Close popup button"
      onClick={onClick}
    />
  </Box>
);

const EventDescription = ({ event }: { event: EventInfo }) => (
  <Box
    direction="row"
    fill="horizontal"
    background="calendar-modal-background"
    justify="center"
  >
    <Text a11yTitle="Event time" margin="small" color="calendar-modal-text">
      {format(new Date(event.date).setUTCMinutes(180), 'HH:mm')}
    </Text>
    <Box margin="small" width="medium">
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

      <Box margin={{ top: 'medium' }}>
        <Button
          href={event.eventLink}
          label="Link"
          alignSelf="end"
          a11yTitle="Event link"
          target="_blank"
          primary
        />
      </Box>
    </Box>
  </Box>
);

export default ModalEvent;
