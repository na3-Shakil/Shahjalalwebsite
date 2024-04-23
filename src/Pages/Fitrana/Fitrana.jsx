import React from 'react';
import { useEffect, useState } from "react";
const Fitrana = () => {

    // Your data
const [data, setData] = useState([]);

const [isHovered, setIsHovered] = useState(false);

    const handleDonate = (e) => {
        e.preventDefault();
        window.location.href = 'https://pay.sumup.com/b2c/QW63KBLK';
    };

    return (
        <div>
            <div className="flex flex-col items-center my-6">
                <p className="text-center text-xl font-semibold m-1 text-purple-700">This year FITRANA £6 per person. Please pay before EID prayer.</p>
                <div className="flex">
                    <button
                        onClick={handleDonate}
                        className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success ${isHovered ? "bg-purple-700" : "bg-purple-600"
                            } hover:bg-green-700 transition-colors duration-300 w-auto px-4 py-2 rounded-md`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="text-white m-0">Pay Fitrana</span>
                        <br />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Fitrana;