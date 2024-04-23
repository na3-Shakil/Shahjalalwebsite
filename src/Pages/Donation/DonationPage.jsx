import { Helmet } from 'react-helmet';

import banner1 from '../../assets/images/sky.jpg';
import Cover from '../Cover/Cover';
import Swal from 'sweetalert2';
import QRCode from 'qrcode.react'; // Import the QRCode component




    const DonationPage = () => {
        const handleDonate = (e) => {
            e.preventDefault();
            window.location.href =  'https://pay.sumup.com/b2c/QKXQYFS4';
        };
    
    return (


        <div>
            <Helmet>
                <title>Donate Now</title>
                <link rel="canonical" href="https://pay.sumup.com/b2c/QKXQYFS4" />
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-0 pt-0">
                <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-indigo-800 mb-3 text-center">SUPPORT YOUR MOSQUE</h1>
                    <p className="text-red-600 text-xl text-center font-semibold">Make a donation now to get a house in jannah!</p>
                    <p className="text-teal-600 mb-8 text-center">
                        The Messenger of Allah ﷺ said:

                        <br />

                        “Allah, the Almighty, said: Spend, O son of Adam, you will be spent on.”<br />
                        Hadith (Al-Bukhari and Muslim)
                        <br />


                    </p>
                    <p className="text-green-600 text-lg text-center font-semibold mb-4">Donate now by scaning the QR code below</p>
                    <div className="flex justify-center mb-4">
                        <QRCode value="https://pay.sumup.com/b2c/QKXQYFS4" />
                    </div>
                    <p className="text-blue-600 text-lg text-center font-semibold mb-4">Donate now by clicking on 'Doante now' below</p>
                     
                     <form className="flex flex-col" onSubmit={handleDonate}>
                    <button
                            type="submit"
                            className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Donate Now
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        If you prefer to donate using another link, you can do so by clicking <a href="https://pay.sumup.com/b2c/QKXQYFS4"style={{textDecoration: 'underline', color: 'blue'}}>here</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;