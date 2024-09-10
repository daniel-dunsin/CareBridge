import { EventType } from "@/lib/store/event.store";

const now = new Date();

const dummyEvents: EventType[] = [
  {
    id: " 0,",
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2024, 5, 1),
    end: new Date(2024, 5, 2),
  },
  {
    id: " 1,",
    title: "Long Event",
    start: new Date(2024, 5, 7),
    end: new Date(2024, 5, 10),
  },

  {
    id: " 2,",
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: " 3,",
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: " 4,",
    title: "Some Event",
    start: new Date(2015, 6, 9, 0, 0, 0),
    end: new Date(2015, 6, 10, 0, 0, 0),
  },
  {
    id: " 5,",
    title: "Conference",
    start: new Date(2015, 6, 11),
    end: new Date(2015, 6, 13),
    description: "Big conference for important people",
  },
  {
    id: " 6,",
    title: "Meeting",
    start: new Date(2015, 6, 12, 10, 30, 0, 0),
    end: new Date(2015, 6, 12, 12, 30, 0, 0),
    description: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: " 7,",
    title: "Lunch",
    start: new Date(2015, 6, 12, 12, 0, 0, 0),
    end: new Date(2015, 6, 12, 13, 0, 0, 0),
    description: "Power lunch",
  },
  {
    id: " 8,",
    title: "Meeting",
    start: new Date(2015, 6, 12, 14, 0, 0, 0),
    end: new Date(2015, 6, 12, 15, 0, 0, 0),
  },
  {
    id: " 9,",
    title: "Happy Hour",
    start: new Date(2015, 6, 12, 17, 0, 0, 0),
    end: new Date(2015, 6, 12, 17, 30, 0, 0),
    description: "Most important meal of the day",
  },
  {
    id: " 10,",
    title: "Dinner",
    start: new Date(2015, 6, 12, 20, 0, 0, 0),
    end: new Date(2015, 6, 12, 21, 0, 0, 0),
  },
  {
    id: " 11,",
    title: "Planning Meeting with Paige",
    start: new Date(2015, 6, 13, 8, 0, 0),
    end: new Date(2015, 6, 13, 10, 30, 0),
  },
  {
    id: "de",
    title: "Inconvenient Conference Call",
    start: new Date(2015, 6, 13, 9, 30, 0),
    end: new Date(2015, 6, 13, 12, 0, 0),
  },
  {
    id: ",",
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2015, 6, 13, 11, 30, 0),
    end: new Date(2015, 6, 13, 14, 0, 0),
  },
  {
    id: " 11.3,",
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2015, 6, 13, 15, 30, 0),
    end: new Date(2015, 6, 13, 16, 0, 0),
  },
  {
    id: " 12,",
    title: "Late Night Event",
    start: new Date(2015, 6, 17, 19, 30, 0),
    end: new Date(2015, 6, 18, 2, 0, 0),
  },
  {
    id: "12.5",
    title: "Late Same Night Event",
    start: new Date(2015, 6, 17, 19, 30, 0),
    end: new Date(2015, 6, 17, 23, 30, 0),
  },
  {
    id: " 13,",
    title: "Multi-day Event",
    start: new Date(2015, 6, 20, 19, 30, 0),
    end: new Date(2015, 6, 22, 2, 0, 0),
  },
  {
    id: " 14,",
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: " 15,",
    title: "Point in Time Event",
    start: now,
    end: now,
  },
];

export default dummyEvents;
