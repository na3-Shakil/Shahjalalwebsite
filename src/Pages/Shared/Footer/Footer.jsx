import { FaFacebook, FaTwitter, FaYoutube, FaWhatsapp, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const facebookUrl = 'https://www.facebook.com/profile.php?id=100064717565086';
    const twitterUrl = 'https://twitter.com/your-twitter-profile-url';
    const youtubeUrl = 'https://www.youtube.com/your-youtube-channel';
    const whatsappUrl = 'https://chat.whatsapp.com/Em2wl31uRL20VF1u1d5Qof';
    const instraUrl = 'https://www.instagram.com/yourpage/';
    return (
        <div className="footer-container">
            <footer className="footer px-10 py-6 border-t bg-base-200 text-base-content border-base-300 flex justify-between items-center">
                <div className="footer-address">
                    <p className='font-semibold text-lg'>Shahjalal Mosque Bristol</p>
                    <p className='text-sm'>468-470 Stapleton Rd, Eastville, Bristol BS5 6PE, United Kingdom</p>
                </div>
                <div className='flex'>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-4xl mx-3 text-primary transition duration-300 hover:text-primary-dark" />
                    </a>
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-4xl mx-3 text-primary transition duration-300 hover:text-primary-dark" />
                    </a>
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-4xl mx-3 text-primary transition duration-300 hover:text-primary-dark" />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-4xl mx-3 text-primary transition duration-300 hover:text-primary-dark" />
                    </a>
                    <a href={instraUrl} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-4xl mx-3 text-primary transition duration-300 hover:text-primary-dark" />
                    </a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div className="footer-copyright">
                    <p>&copy; {currentYear} Shahjalal Mosque Bristol. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
