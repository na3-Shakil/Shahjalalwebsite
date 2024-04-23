// Event.js
import React, { useState } from 'react';
import EventList from './EventList';
import EventRegistrationForm from './EventRegistrationForm';


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
        date: "Every day after Magrib Salah",
        location: "Main Prayer Hall, Shahjalal Jame Mosque Bristol",
        description:
            "Attend our enlightening seminar on Hadith and learn valuable teachings from the sayings of Prophet Muhammad (peace be upon him).",
        image: "https://i.ibb.co/ZgKdjb4/Image2.jpg",

    },
    {
        id: 3,
        title: "Effort of Deen",
        date: "Every Sunday: 1 hour before zuhr",
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
                <EventList events={eventsData} openModal={openModal} />
                {isModalOpen && selectedEvent && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <EventRegistrationForm closeModal={closeModal} programName={selectedEvent.title} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Event;
