
import Ramadan from "../../Ramadan/Ramadan";
import TimeTable from "../../TimeTable/TimeTable";
import TimeTableTomorrow from "../../TimeTable/TimeTableTomorrow";
import Banner from "../Banner/Banner";
import Poster from "../Poster/Poster";
import Contact from "../../Contact/Contact";
import EidFitr from "../../EidFitr/EidFitr";
import Fitrana from "../../Fitrana/Fitrana";
import Mosquedonation from "../../MosqueDonation/Mosquedonation";
import Shawal from "../../Shawal/Shawal";
import RollingHeadline from "../../RollingHeadline/RollingHeadline" 
import RollingHeadline1 from "../../RollingHeadline1/RollingHeadline1";
const Home = () => {
    return (
        <div className=" bg-green-100">
            <div className="flex flex-col items-center py-8 bg-green-300">
                <p className="text-center text-4xl font-bold text-green-700">Welcome to Shahjalal Jame Mosque Bristol </p>
            </div>
            <RollingHeadline></RollingHeadline>
            {/* <RollingHeadline1></RollingHeadline1> */}
            {/* <Fitrana></Fitrana> */}
            <Mosquedonation></Mosquedonation>
            <TimeTable></TimeTable>
            <TimeTableTomorrow></TimeTableTomorrow>
            <Shawal></Shawal>
            {/* <EidFitr></EidFitr> */}
            {/* <Ramadan></Ramadan> */}
            <Banner></Banner>
            <Poster></Poster>
            <Contact></Contact>

        </div>
    );
};

export default Home;