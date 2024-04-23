import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Swal from "sweetalert2";
import banner1 from "./../../../assets/images/future_c.jpg";
import banner2 from "./../../../assets/images/p.jpg";
import banner3 from "./../../../assets/images/pp.jpg";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    window.location.href =  'https://pay.sumup.com/b2c/QKXQYFS4';
};

  return (
    <Carousel autoPlay={true} interval={9501} infiniteLoop={true}>
      {/* Banner 1 */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="max-w-3xl lg:flex lg:align-middle lg:items-center justify-start items-start">
          <div className="text-center">
            <h1 className="mb-5 text-3xl font-bold text-white">
              The Virtue of Building Masajid and Encouragement to Do So
            </h1>
            <p className="mb-5 text-white">
              When 'Uthman bin 'Affan intended to build the mosque (of the
              Prophet) the people did not approve of it. They liked that it
              should be kept in the same state. Thereupon he said: I heard the
              Messenger of Allah (ﷺ) say: He who built a mosque for Allah,
              Allah would build a house for him like it in Paradise.
            </p>
            <h1 className="mb-5 font-semibold text-white">Sahih Muslim 533b</h1>
          </div>
          <div className="mb-8">
            <button
              onClick={handleDonate}
              className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success ${isHovered ? "bg-green-700" : "bg-green-600"
                } hover:bg-green-700 transition-colors duration-300 w-auto px-4 py-2 rounded-md`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-white mb-5">Donate Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Banner 2 */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl font-bold text-white">
              Embracing Blessings Through Visiting Mosque Frequently
            </h1>
            <p className="mb-5 text-xl text-white">
              Abu Huraira reported: The Prophet, peace and blessings be upon
              him, said, “Whoever goes to the mosque at dawn or dusk, Allah
              will prepare for his residence in Paradise for every morning and
              evening.”
            </p>
            <h1 className="mb-5 font-semibold text-white">
              Sahih al-Bukhari 662 , Sahih Muslim 669
            </h1>
          </div>
        </div>
      </div>

      {/* Banner 3 */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl font-bold text-white">
              The Excellence of Performing Salat (Prayers) in Congregation
            </h1>
            <p className="mb-5 text-white">
              `Abdullah bin `Umar Narrated that, The reward of the congregational
              prayer is twenty seven times greater (than that of the prayer
              offered by a person alone).
            </p>
            <h1 className="mb-5 font-semibold text-white">
              Sahih al-Bukhari 649
            </h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
