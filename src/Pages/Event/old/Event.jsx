import PropTypes from 'prop-types';
import { useState } from 'react';
const eventsData = [
  {
    id: 1,
    title: "Qur'an Recitation Gathering",
    date: "Every Sunday before Jumu'ah",
    location: "Shahjalal Mosque Bristol",
    description:
      "Join us for a spiritually uplifting gathering of Qur'an recitation with Hafez Sumon. Come and connect with the divine words.",
    image: "https://i.ibb.co/sFKjpqy/Image1.jpg",
    registrationLink: "https://example.com/registration-link-1",
  },
  {
    id: 2,
    title: "Daily Hadith Reading Seminar (Daily T'aleem)",
    date: "Every day after Maghrib Salah",
    location: "Main Prayer Hall, Shahjalal Jame Mosque Bristol",
    description:
      "Attend our enlightening seminar on Hadith and learn valuable teachings from the sayings of Prophet Muhammad (peace be upon him).",
    image: "https://i.ibb.co/ZgKdjb4/Image2.jpg",

  },
  {
    id: 3,
    title: "Effort of Deen",
    date: "Every Sunday: Asr to Maghrib",
    location: "Main Prayer Hall, Shahjalal Mosque Bristol",
    description:
      "Allah Subhanahu wa ta'ala has kept the success of this Dunya' and hereafter only in the following of complete deen. To bring the complete deen into our life, we need an effort of deen. Every Sunday, we are having an effort of deen gathering in our mosque. Please join.",
    image: "https://i.ibb.co/mCmbvcZ/Image3.jpg",

  },
  {
    id: 4,
    title: "Deen for Sisters",
    date: "Wednesday 1pm-3pm",
    location: "Khadijah Centre, Shahjalal Mosque Bristol",
    description:
      "Calling all sisters! Join us for an exciting and spiritually enriching Quran reading for all levels and explanation of Quran.",
    image: "https://i.ibb.co/yhp2hvc/Image4.jpg",
    registrationLink: "No registration needed",
  },
  {
    id: 5,
    title: "Deen for Teens",
    date: "Friday 6.00 PM-7.30 PM",
    location: "Khadijah Centre, Shahjalal Mosque Bristol",
    description:
      "Calling all Muslim girls to attend our enlightening Islamic Halaqah and youth club where renowned scholars will discuss various topics related to Islam.",
    image: "https://i.ibb.co/vQn3MGh/IMG-20230814-WA0002-1.jpg",
    registrationLink: "https://example.com/registration-link-4",
  },
  {
    id: 6,
    title: "Ramadan Iftar Gathering",
    date: "Every day of Ramadan",
    location: "Shahjalal Mosque Bristol",
    description:
      "Join us for a joyous community Iftar gathering during the blessed month of Ramadan. Share in the blessings and celebrations.",
    image: "https://i.ibb.co/tc018pG/Image5.jpg",
    registrationLink: "https://example.com/registration-link-5",
  },

];






const RegistrationForm = ({ closeModal, programName }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., sending the data to a server
    console.log('Form submitted with data:', formData);
    // You can reset the form data if needed
    setFormData({ name: '', phoneNumber: '', email: '' });
    // Close the modal after form submission
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-md rounded-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-3xl font-semibold mb-4">Register for {programName}</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              pattern="[0-9]{10}"
              required
            />
            <small className="text-gray-500">Please enter a valid 10-digit phone number.</small>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

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

const Event = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} openModal={() => openModal(event)} />
          ))}
        </div>
        {isModalOpen && selectedEvent && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <RegistrationForm closeModal={closeModal} programName={selectedEvent.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;

