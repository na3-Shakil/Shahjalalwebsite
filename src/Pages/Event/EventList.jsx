
import EventCard from './EventCard';

const EventList = ({ events, openModal }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} openModal={() => openModal(event)} />
      ))}
    </div>
  );
};

export default EventList;
