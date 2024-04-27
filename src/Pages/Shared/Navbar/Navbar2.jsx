import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/newlogo.jpeg';
import Swal from 'sweetalert2';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage navigation bar visibility

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleTabClick = () => {
        setIsOpen(false); // Close the navigation bar when a tab is clicked
    };

    const navOptions = (
        <>
            <li><Link to="/" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>Home</Link></li>
            <li><Link to="/about" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>About</Link></li>
            <li><Link to="/events" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>Events</Link></li>
            <li><Link to="/resources" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>Resources</Link></li>
            <li><Link to="/PrayerTimetable" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>Prayer Timetable</Link></li>
            <li><Link to="/contact" className="text-base text-gray-700 hover:text-black" onClick={handleTabClick}>Contact</Link></li>
        </>
    );

    const handleDonate = () => {
        Swal.fire({
            title: "PLEASE DONATE DIRECTLY TO OUR BANK ACCOUNT",
            html: "Shahjalal Jame Mosque Trust LTD.<br>SORT CODE: 308475<br>ACCOUNT NO: 42 63 86 60<br>We are currently working to implement direct payment functionality. Please check back later.",
            icon: "info",
            confirmButtonText: "Got it",
            confirmButtonColor: "#3085d6",
        });
    };

    return (
        <div className="navbar fixed z-50 bg-green-50 w-full top-0 max-w-screen-xl shadow-sm bg-opacity-70 backdrop-blur-lg">
            <div className="navbar-start flex items-center">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    {/* Dropdown Button */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-gray-700" onClick={toggleNavbar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    {/* Dropdown Content */}
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
                        {navOptions}
                    </ul>
                </div>

                {/* Logo and Website Name */}
                <div className="flex items-center ml-4">
                    <img src={logo} alt="" className="w-8 h-8" />
                    <Link to="/" className="normal-case lg:text-2xl sm:text-lg text-gray-900 ml-2 font-semibold truncate">
                        Shahjalal Jame Mosque Bristol
                    </Link>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden font-semibold lg:flex">
                <ul className="menu menu-horizontal px-4">{navOptions}</ul>
            </div>
            
            {/* Donate Button */}
            <div className="navbar-end">
                {/* <button onClick={handleDonate} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">Donate</button> */}
                <Link to={"/donate"} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success' onClick={handleTabClick}>Donate</Link>
            </div>

        </div>
    );
};

export default Navbar2;
