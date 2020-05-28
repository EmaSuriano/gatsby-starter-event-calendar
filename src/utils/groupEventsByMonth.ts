import {
  format,
  differenceInMonths,
  isBefore,
  isSameMonth,
  compareAsc,
} from 'date-fns';

const removeOldAndFutureEvents = (
  event: EventInfo,
  today: Date,
  monthDiff: number,
) => {
  if (!isSameMonth(event.date, today) && isBefore(event.date, today))
    return false;
  if (differenceInMonths(event.date, today) >= monthDiff) return false;

  return true;
};

const groupEventsByMonth = (
  events: EventInfo[],
  monthsDifferenceThreshold: number,
  deterministicDate?: string,
): MonthInfo[] => {
  const today = deterministicDate ? new Date(deterministicDate) : new Date();

  const eventsByMonthKey = events
    .filter((event) =>
      removeOldAndFutureEvents(event, today, monthsDifferenceThreshold),
    )
    .reduce((acc: { [key: string]: EventInfo[] }, event) => {
      const monthYear = format(event.date, 'YYYY-MM');
      const events = acc[monthYear] || [];
      return {
        ...acc,
        [monthYear]: events.concat(event),
      };
    }, {});

  const result = Object.keys(eventsByMonthKey)
    .map((monthKey) => ({
      events: eventsByMonthKey[monthKey],
      startDate: new Date(`${monthKey}-01`),
    }))
    .sort((m1, m2) => compareAsc(m1.startDate, m2.startDate));

  return result;
};

export default groupEventsByMonth;
