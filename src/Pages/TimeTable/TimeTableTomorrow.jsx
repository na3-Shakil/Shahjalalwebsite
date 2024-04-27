import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrentTimeOfBristolEngland from "./CurrentTimeOfBristolEngland";
import CurrentHijriDateOfSaudiArabia from "./CurrentHijriDateOfSaudiArabia";

const TimeTableTomorrow = () => {
  // Your data
  const [data, setData] = useState([]);

  // Fetch the data from timeTableData.json
  useEffect(() => {
    fetch("./timeTableData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to get the date for tomorrow
  const getTomorrowDateInEnglish = () => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return tomorrowDate.toLocaleDateString("en-US", options);
  };

  // Function to filter data for tomorrow's date
  const getTomorrowDateData = () => {
    const tomorrowDate = getTomorrowDateInEnglish();

    // Extract month and date from tomorrow's date
    const [month, dayNumber] = tomorrowDate.split(" ");

    // Get the data for tomorrow's date
    return data.filter(
      (item) =>
        item.EnglishMonth === month &&
        item.EnglishDate === parseInt(dayNumber, 10)
    );
  };

  // Get the data for tomorrow's date
  let tomorrowData = getTomorrowDateData();
  console.log("Tomorrow's Date:", getTomorrowDateInEnglish());
  console.log("Tomorrow's Data:", tomorrowData);

  return (
    <div className="pt-5">
      <div className="">
        <div className=" ">

          <div className="p-1  bg-green-200">
          <p className="text-center text-l m-6  text-red-700 font-semibold ">&#8681; Prayer Timings for Tomorrow : {getTomorrowDateInEnglish()} &#8681; </p>
           

            {tomorrowData.length > 0 ? (
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr className="text-slate-600">
                    <th className="" style={tableHeaderCellStyle}></th>
                    <th className="shadow-md rounded-md" style={tableHeaderCellStyle}>
                      Fajr
                    </th>
                    <th className="shadow-md rounded-md" style={tableHeaderCellStyle}>
                      Zuhr
                    </th>
                    <th className="shadow-md rounded-md" style={tableHeaderCellStyle}>
                      Asr
                    </th>
                    <th className="shadow-md rounded-md" style={tableHeaderCellStyle}>
                      Maghrib
                    </th>
                    <th className="shadow-md rounded-md" style={tableHeaderCellStyle}>
                      Isha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-slate-600">
                    <div
                      className="text-slate-600  rounded-lg mb-1 font-bold mr-4 shadow-md"
                      style={tableSubHeaderCellStyle}
                    >
                      Begin
                    </div>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].FajrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].ZuhrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].AsrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].MaghribBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].IshaBegin}
                    </td>
                  </tr>
                  <tr className="text-slate-600">
                    <div
                      className="text-slate-600  rounded-lg font-bold mr-4 shadow-md"
                      style={tableSubHeaderCellStyle}
                    >
                      Jamat
                    </div>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].FajrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].ZuhrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].AsrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].MaghribBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {tomorrowData[0].IshaJamat}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No data available for {getTomorrowDateInEnglish()}</p>
            )}
          </div>
          <p className="text-center text-xl m-6 text-red-600">*Zuhr Jamat time on Friday is for the Jummah prayer; Jummah Prayer is at 1.30 PM for summer Time and for Winter, Jummah is at 1:00 PM* </p>
        </div>
        <div className="flex items-center justify-center">
                  <Link to={"/PrayerTimeTable"} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success my-3  '>Full month Timetable</Link>
                </div>
      </div>
    </div>
  );
};

const tableHeaderCellStyle = {
  padding: "8px",
  textAlign: "center",
};

const tableSubHeaderCellStyle = {
  padding: "8px",
  textAlign: "center",
};

const tableCellStyle = {
  padding: "8px",
  textAlign: "center",
};

export default TimeTableTomorrow;
