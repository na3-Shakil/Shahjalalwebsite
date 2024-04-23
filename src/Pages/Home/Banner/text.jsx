import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from './../../../assets/images/p.jpg'
import banner2 from './../../../assets/images/future_c.jpg'
import banner3 from './../../../assets/images/pp.jpg'
const Banner = () => {
    return (
        <Carousel>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-3xl font-bold text-white">The Excellence of Performing Salat (Prayers) in Congregation</h1>

                        <p className="mb-5 text-white">When any one of you enters the mosque, he should say: ‘Allahumma iftah li abwaba rahmatik (O Allah! open for me the doors of Thy mercy)’; and when he steps out he should say: “Allahumme inni as’aluka min fadlik (O Allah! I beg of You Thy Grace)</p>

                        <h1 className="mb-5 font-semibold text-white">Al- Bukhari and Muslim</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-3xl font-bold text-white">The Excellence of Performing Salat (Prayers) in Congregation</h1>

                        <p className="mb-5 text-white">When any one of you enters the mosque, he should say: ‘Allahumma iftah li abwaba rahmatik (O Allah! open for me the doors of Thy mercy)’; and when he steps out he should say: “Allahumme inni as’aluka min fadlik (O Allah! I beg of You Thy Grace)</p>

                        <h1 className="mb-5 font-semibold text-white">Al- Bukhari and Muslim</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-3xl font-bold text-white">The Excellence of Performing Salat (Prayers) in Congregation</h1>

                        <p className="mb-5 text-white">Allah&apos;s Messenger said: &quot;Whoever attends Isha (prayer) in congregation, then he has (the reward as if he had) stood half of the night. And whoever prays Isha and Fajr in congregation, then he has (the reward as if he had) spend the entire night standing (in prayer).&quot;</p>

                        <h1 className="mb-5 font-semibold text-white">Jami` at-Tirmidhi</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-3xl font-bold text-white">The Excellence of Performing Salat (Prayers) in Congregation</h1>

                        <p className="mb-5 text-white">Allah&apos;s Messenger said: &quot;Whoever attends Isha (prayer) in congregation, then he has (the reward as if he had) stood half of the night. And whoever prays Isha and Fajr in congregation, then he has (the reward as if he had) spend the entire night standing (in prayer).&quot;</p>

                        <h1 className="mb-5 font-semibold text-white">Jami` at-Tirmidhi</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner; 