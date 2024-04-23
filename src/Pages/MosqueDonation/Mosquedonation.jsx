import React from 'react';
import { Link } from "react-router-dom";
import './Mosquedonation.css'; // Import CSS file for styling

const Mosquedonation = () => {
    return (
        <div>
            <div className="flex flex-col items-center my-0">
                <p className="text-center text-xl font-semibold m-1 text-orange-600 ">He who built a mosque for Allah,
                  Allah would build a house for him like it in Paradise.</p>
                <p className="text-green-900 text-xl text-center font-semibold flashing">Make a donation now to get a house in jannah!</p>
                <div className="flex items-center justify-center">
                  <Link to={"/donate"} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success my-3  '>Donate for Mosque</Link>
                </div>
            </div>
        </div>
    );
};

export default Mosquedonation;
