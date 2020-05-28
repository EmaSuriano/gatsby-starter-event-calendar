import React, { useContext } from 'react';
import { Text, Box, ResponsiveContext } from 'grommet';

const MAX_AMOUNT_EVENTS = 2;

type Props = {
  events: EventInfo[];
  hasPast: boolean;
};

const Events = ({ events, hasPast }: Props) => {
  const size = useContext(ResponsiveContext);
  const isPhone = size === 'small';

  return (
    <Box
      gap={isPhone ? 'small' : 'xsmall'}
      pad="none"
      direction="column"
      fill="horizontal"
      margin="none"
    >
      {events.slice(0, isPhone ? 99 : MAX_AMOUNT_EVENTS).map((event) => (
        <Box key={event.id}>
          <Box
            round="xsmall"
            background={
              hasPast
                ? 'calendar-past-event-background'
                : 'calendar-event-background'
            }
            pad="2px"
          >
            <Text
              size="small"
              truncate
              color={
                hasPast ? 'calendar-past-event-text' : 'calendar-event-text'
              }
              a11yTitle="Event name"
            >
              {event.eventName}
            </Text>
          </Box>
        </Box>
      ))}

      {events.length > MAX_AMOUNT_EVENTS && (
        <Text size="small" truncate>
          {`And ${events.length - MAX_AMOUNT_EVENTS} more ...`}
        </Text>
      )}
    </Box>
  );
};

export default Events;
