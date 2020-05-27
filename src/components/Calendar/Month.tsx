import React, { useMemo } from 'react';
import { getDaysInMonth, getISODay, format } from 'date-fns';
import { Heading, Box } from 'grommet';
import Day from './Day';
import EmptyDays from './EmptyDays';
import Weekdays from './Weekdays';
import { Hide } from '../Query';
import styled from 'styled-components';
import buildDaysWithEvents from '../../utils/buildDaysWithEvents';

type Props = MonthInfo & {
  openModal: (modalData: ModalData) => void;
};

const Month = ({ events, startDate, openModal }: Props) => {
  const dayNumber = getISODay(startDate);
  const days = getDaysInMonth(startDate);
  const emptyDays = 7 - ((dayNumber + days) % 7);

  const daysWithEvents = buildDaysWithEvents(startDate, events);

  return (
    <Box margin="medium">
      <Heading a11yTitle={`Month of ${format(startDate, 'MMMM YYYY')}`}>
        <b>{`${format(startDate, 'MMMM')} `}</b>
        {format(startDate, 'YYYY')}
      </Heading>
      <MonthContainer>
        <Hide size="small">
          <Weekdays />
        </Hide>
        <Box direction="row" wrap>
          {dayNumber !== 7 && <EmptyDays amount={dayNumber} />}

          {daysWithEvents.map((modalData) => {
            const onClick =
              modalData.events.length > 0
                ? () => openModal(modalData)
                : undefined;

            return (
              <Day
                key={format(modalData.date, 'DD')}
                onClick={onClick}
                {...modalData}
              />
            );
          })}

          {emptyDays !== 7 && <EmptyDays amount={emptyDays} />}
        </Box>
      </MonthContainer>
    </Box>
  );
};

const MonthContainer = styled.div`
  border-radius: 12px;
  border: 4px white solid;
`;

export default React.memo(Month);
