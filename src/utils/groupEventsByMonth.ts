import {
  format,
  differenceInMonths,
  isBefore,
  isSameMonth,
  compareAsc,
  parse,
} from 'date-fns';
import { parseEventDate } from './parseDate';

const removeOldAndFutureEvents = (
  event: EventInfo,
  today: Date,
  monthDiff: number,
) => {
  const eventDate = parseEventDate(event.date);

  if (!isSameMonth(eventDate, today) && isBefore(eventDate, today))
    return false;
  if (differenceInMonths(eventDate, today) >= monthDiff) return false;

  return true;
};

const groupEventsByMonth = (
  events: EventInfo[],
  monthsDifferenceThreshold: number,
): MonthInfo[] => {
  const today = new Date();

  const eventsByMonthKey = events
    .filter((event) =>
      removeOldAndFutureEvents(event, today, monthsDifferenceThreshold),
    )
    .reduce((acc: { [key: string]: EventInfo[] }, event) => {
      const monthYear = format(parseEventDate(event.date), 'MM-yyyy');

      const events = acc[monthYear] || [];
      return {
        ...acc,
        [monthYear]: events.concat(event),
      };
    }, {});

  const result = Object.keys(eventsByMonthKey)
    .map((monthKey) => ({
      events: eventsByMonthKey[monthKey],
      startDate: parse(`01-${monthKey}`, 'dd-MM-yyyy', 0),
    }))
    .sort((m1, m2) => compareAsc(m1.startDate, m2.startDate));

  return result;
};

export default groupEventsByMonth;
