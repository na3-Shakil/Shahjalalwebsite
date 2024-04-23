
import banner1 from '../../assets/images/future_c.jpg';
import banner2 from '../../assets/images/p.jpg';

const About = () => {
    return (
        <div className="bg-gray-100 py-10">
            {/* Images Section */}
            <div className="lg:flex lg:space-x-6 mb-6">
                <div className="md:w-1/2 p-5">
                    <img
                        src={banner2}
                        alt="Team working together"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-center mt-2 text-gray-600 font-semibold">Our Present Mosque</p>
                </div>
                <div className="md:w-1/2 p-5">
                    <img
                        src={banner1}
                        alt="Team working together"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-center mt-2 text-gray-600 font-semibold">New Planned Structure</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-10">
                <div className="">
                    <div className="">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                            Shahjalal Mosque Bristol
                        </h1>
                        <div className="text-gray-700 space-y-4 text-center md:text-left">
                            <p>
                                Welcome to Shahjalal Mosque Bristol! We are a community-oriented mosque
                                dedicated to provide spiritual guidance and fostering unity among the
                                Muslim community in Bristol and beyond.
                            </p>
                            <p>
                                Our mosque, located at 468-470 Stapleton Rd, Eastville, Bristol BS5 6PE,
                                United Kingdom, is open to all individuals who seek spiritual growth and
                                a sense of belonging. We offer regular prayer services, religious
                                education, and various community events to promote knowledge, love, and
                                understanding.
                            </p>
                            <p>
                                For any inquiries or to reach out to us, please contact us via email at
                                <a href="mailto:shahjalaljamemosque@gmail.com" className="text-green-600 font-semibold"> shahjalaljamemosque@gmail.com</a> or call our Imam at
                                <a href="tel:07896985835" className="text-green-600 font-semibold"> 07896 985835</a>. You can
                                also reach us by phone during office hours (before Prayers) at
                                <a href="tel:01179519988" className="text-green-600 font-semibold"> 0117 951998</a>. We are here to support and serve
                                the community in any way we can.
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                                Khadiza Center of Shahjalal Mosque Bristol
                            </h1>
                            <p>
                                Welcome to Khadiza Center of Shahjalal Mosque Bristol! A dedicated separate Buliding for Ladies.
                            </p>
                            <p>
                                Separate washroom  and other facilities for Ladies.
                            </p>
                            <p>
                                Khadiza center is dedicated to provide spiritual guidance and fostering unity among the
                                Muslim Ladies community in Bristol and beyond.
                            </p>
                            <p>
                                For any inquiries or to reach out to us, please contact us via email at
                                <a href="mailto:shahjalaljamemosque@gmail.com" className="text-green-600 font-semibold"> shahjalaljamemosque@gmail.com</a> or call our Imam at
                                <a href="tel:07896985835" className="text-green-600 font-semibold"> 07896 985835</a>.   We are here to support and serve
                                the community in any way we can.
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
