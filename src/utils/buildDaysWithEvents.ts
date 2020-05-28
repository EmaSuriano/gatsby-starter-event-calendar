import { getDaysInMonth, isSameDay } from 'date-fns';
import { parseEventDate } from './parseDate';

const buildDaysWithEvents = (
  startDate: Date,
  events: EventInfo[],
): ModalData[] => {
  const days = getDaysInMonth(startDate);

  return Array(days)
    .fill(null)
    .map((x, i) => {
      const date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        i + 1,
      );

      return {
        date,
        events: events.filter((event) =>
          isSameDay(parseEventDate(event.date), date),
        ),
      };
    });
};

export default buildDaysWithEvents;
