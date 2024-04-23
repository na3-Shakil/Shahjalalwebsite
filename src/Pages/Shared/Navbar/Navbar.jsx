import { Link } from "react-router-dom";
import logo from "../../../assets/images/icon.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-base text-gray-700 hover:text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-base text-gray-700 hover:text-black">
          About
        </Link>
      </li>
      <li>
        <Link to="/events" className="text-base text-gray-700 hover:text-black">
          Events
        </Link>
      </li>
      <li>
        <Link
          to="/resources"
          className="text-base text-gray-700 hover:text-black"
        >
          Resources
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-base text-gray-700 hover:text-black"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-white w-full shadow-md top-0 max-w-screen-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            {/* Dropdown Button */}
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Dropdown Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navOptions}
              {/* Donate Button (Visible only on mobile) */}
              <li className="lg:hidden">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">
                  DonateS
                </button>
              </li>
            </ul>
          </div>

          {/* Logo and Website Name */}
          <div className="flex items-center ml-4">
            <img src={logo} alt="" className="w-8 h-8 sm:w-12 sm:h-12" />
            <div className="ml-2 flex flex-col">
              <a className="normal-case lg:text-2xl sm:text-lg text-gray-900 font-semibold">
                Shahjalal Mosque Bristol
              </a>
              <div className="lg:hidden text-gray-700">
                {/* You can add a tagline or other information here */}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex menu menu-horizontal px-4">
          {navOptions}
          <div className="lg:ml-4 hidden lg:block">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">
              DonateLL(I want this at the rightmost corner of the navbar)
            </button>
          </div>
        </ul>

        {/* Donate Button (Visible only on desktop) */}
        {/* <div className="lg:ml-4 ">
                    <button className="hidden lg:block btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success ">DonateL</button>
                </div> */}
      </div>
    </div>
  );
};

export default Navbar;



