import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Event } from '../../services/events';

interface EventCalendarProps {
  events: Event[];
  onEventClick: (eventId: string) => void;
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events, onEventClick }) => {
  const calendarEvents = events.map(event => ({
    id: event.id,
    title: event.title,
    date: event.date,
    extendedProps: { ...event }
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={calendarEvents}
      eventClick={(info) => onEventClick(info.event.id)}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek'
      }}
      height="auto"
    />
  );
};

export default EventCalendar;