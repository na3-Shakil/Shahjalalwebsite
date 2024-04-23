import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar2 from "../Pages/Shared/Navbar/Navbar2";



const Main = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="mt-16"> {/* Add top margin (adjust the value as needed) */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
