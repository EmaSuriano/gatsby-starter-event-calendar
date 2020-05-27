import React from 'react';
import CalendarBox from './CalendarBox';
import { v4 } from 'uuid';
import { Hide } from '../Query';

type Props = {
  amount: number;
};

const EmptyDays = ({ amount = 0 }: Props) => (
  <Hide size="small">
    {Array(amount)
      .fill(null)
      .map(() => (
        <CalendarBox
          background="calendar-empty-background"
          border={{ color: 'calendar-empty-border' }}
          key={v4()}
          square
        />
      ))}
  </Hide>
);

export default EmptyDays;
