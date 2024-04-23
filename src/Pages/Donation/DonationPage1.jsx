import { Helmet } from 'react-helmet';

import banner1 from '../../assets/images/sky.jpg';
import Cover from '../Cover/Cover';
import Swal from 'sweetalert2';


const DonationPage = () => {


    const handleDonate = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "PLEASE DONATE DIRECTLY TO OUR BANK ACCOUNT",
            html:
                "Shahjalal Jame Mosque Trust LTD.<br>SORT CODE: 308475<br>ACCOUNT NO: 42 63 86 60<br>We are currently working to implement direct payment functionality. Please check back later.",
            icon: "info",
            confirmButtonText: "Got it",
            confirmButtonColor: "#3085d6",
        });
    };



    return (


        <div>
            <Helmet>
                <title>Donate Now</title>
                <link rel="canonical" href=" " />
            </Helmet>


            <div className="relative ">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner1})`, filter: 'blur(5px)' }}></div>
                <div className="relative z-10 flex items-center justify-center h-full p-6 text-white text-center bg-opacity-100 backdrop-blur-lg">
                    <p className='text-xl text-white'> May Allah accept your generous contribution and reward you with blessings in this world and the next.</p>
                </div>
            </div>




            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-0 pt-0">
                <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">SUPPORT YOUR MOSQUE</h1>
                    <p className="text-gray-600 text-xl text-center font-semibold">Make a donation now</p>
                    <p className="text-gray-600 mb-8 text-center">
                        The Messenger of Allah ﷺ said:

                        <br />

                        “Allah, the Almighty, said: Spend, O son of Adam, you will be spent on.”<br />
                        Hadith (Al-Bukhari and Muslim)
                        <br />


                    </p>

                    <form className="flex flex-col" onSubmit={handleDonate}>
                        <div className="mb-4 md:mb-6 flex flex-col md:flex-row">
                            <label htmlFor="donationAmount" className="text-sm font-medium text-gray-700 md:w-1/2 md:pr-2">
                                Donation Amount (GBP)
                            </label>
                            <input
                                type="number"
                                id="donationAmount"
                                className="mt-1 px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-1/2 md:pl-2"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                        <div className="mb-4 md:mb-6 flex flex-col md:flex-row">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 md:w-1/2 md:pr-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-1/2 md:pl-2"
                                placeholder="Abdur Rahman"
                                required
                            />
                        </div>

                        <div className="mb-4 md:mb-6 flex flex-col md:flex-row">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 md:w-1/2 md:pr-2">
                                Email Address (optional)
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-1/2 md:pl-2"
                                placeholder="example@email.com"
                            />

                        </div>
                        <div className="mb-4 md:mb-6 flex flex-col md:flex-row">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 md:w-1/2 md:pr-2">
                                Message (optional)
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-1 px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-1/2 md:pl-2"
                                placeholder="Leave a message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Donate Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;
