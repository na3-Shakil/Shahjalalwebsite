const Resources = () => {

    const resourcesData = [
        {
            id: 1,
            title: "Books of Tafsir",
            description:
                "Explore in-depth explanations and interpretations of the Holy Qur'an with our collection of Tafsir books.",
            link: "https://example.com/tafsir",
        },
        {
            id: 2,
            title: "Books of Hadith",
            description:
                "Delve into the sayings and actions of Prophet Muhammad (peace be upon him) with our vast collection of Hadith books.",
            link: "https://example.com/hadith",
        },
        {
            id: 3,
            title: "Juma Lectures' Podcast",
            description:
                "Stay spiritually connected by listening to insightful Juma lectures delivered by respected scholars.",
            link: "https://example.com/podcast",
        },
        {
            id: 4,
            title: "Islamic Literature",
            description:
                "Immerse yourself in the beauty of Islamic literature, including poetry, stories, and inspirational writings.",
            link: "https://example.com/literature",
        },
        {
            id: 5,
            title: "Recent Seminar Audio",
            description:
                "Access the audio recordings of our recent seminars and benefit from the knowledge shared by scholars.",
            link: "https://example.com/seminar-audio",
        },
        // Add more Islamic resources here
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 md:px-10">
                <h2 className="text-4xl font-bold mb-8 text-center">Islamic Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resourcesData.map((resource) => (
                        <div
                            key={resource.id}
                            className="bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg p-6"
                        >
                            <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                            <p className="text-gray-700 mb-4">{resource.description}</p>
                            <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
                            >
                                Access Resource
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
