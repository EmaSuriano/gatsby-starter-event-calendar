type EventInfo = {
  id: string;
  eventName: string;
  date: string;
  eventLink: string;
  place: string;
};

type ModalData = {
  date: Date;
  events: EventInfo[];
};

type MonthInfo = {
  startDate: Date;
  events: EventInfo[];
};
