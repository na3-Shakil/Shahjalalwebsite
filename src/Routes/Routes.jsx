import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Event from "../Pages/Event/Event";
import Resources from "../Pages/Resources/Resources";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationPage from "../Pages/Donation/DonationPage";
import PrayerTimetable from "../Pages/PrayerTimetable/PrayerTimetable";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element:<About></About>
      }
      ,
      {
        path: '/events',
        element: <Event></Event>
      }
      ,
      {
        path: '/resources',
        element: <Resources></Resources>
      }
      ,
      {
        path: '/PrayerTimeTable',
        element: <PrayerTimetable></PrayerTimetable>
      }
      ,
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/donate',
        element:<DonationPage></DonationPage>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

