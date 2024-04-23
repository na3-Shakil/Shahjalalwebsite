
import PropTypes from 'prop-types';

const EventCard = ({ event, openModal }) => (
    <div className="rounded-md overflow-hidden shadow-lg border border-gray-300 p-4 transition-transform transform hover:scale-105">
        <div className="relative">
            <img
                src={event.image}
                alt={event.title}
                className="object-cover rounded-t-md w-full h-48"
            />
            <div className="absolute top-2 left-2 bg-white rounded-full px-3 py-1 text-gray-800 font-semibold">
                {event.date}
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                {event.date}
            </p>
            {event.time && (
                <p className="text-gray-600 mb-2">
                    <i className="far fa-clock mr-2"></i>
                    {event.time}
                </p>
            )}
            <p className="text-gray-600 mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {event.location}
            </p>
            <p className="text-gray-800 mb-4">{event.description}</p>
            {event.registrationLink && (
                <button
                    onClick={() => openModal()}
                    className="registration-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 inline-block"
                >
                    Register
                </button>
            )}
        </div>
    </div>
);

EventCard.propTypes = {
    event: PropTypes.shape({
        // ... (same as the original PropTypes)
    }).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default EventCard;
