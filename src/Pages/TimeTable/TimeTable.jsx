import { useEffect, useState } from "react";
import CurrentTimeOfBristolEngland from "./CurrentTimeOfBristolEngland";
import CurrentHijriDateOfSaudiArabia from "./CurrentHijriDateOfSaudiArabia";
 


const TimeTable = () => {
  // Your data
  const [data, setData] = useState([]);

  /*const [isHovered, setIsHovered] = useState(false);

   const handleDonate = (e) => {
    e.preventDefault();
    window.location.href = 'https://pay.sumup.com/b2c/QW63KBLK';
  };
 */

  // Fetch the data from timeTableData.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./timeTableData.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Update data every day at 12 AM
    const intervalId = setInterval(fetchData, 1000 * 60 * 60 * 24); // 24 hours

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to get the current date in English format
  const getCurrentDateInEnglish = () => {
    const currentDate = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return currentDate.toLocaleDateString("en-US", options);
  };

  // Function to get the current date in Hijri format for Saudi Arabia
  const getCurrentHijriDateOfSaudiArabia = () => {
    return <CurrentHijriDateOfSaudiArabia />;
  };

  // Function to filter data for the current date
  const getCurrentDateData = () => {
    const currentDate = getCurrentDateInEnglish();

    // Extract month and date from currentDate
    const [month, dayNumber] = currentDate.split(" ");

    // Get the data for the current date
    return data.filter(
      (item) =>
        item.EnglishMonth === month &&
        item.EnglishDate === parseInt(dayNumber, 10)
    );
  };

  // Get the data for the current date
  let currentData = getCurrentDateData();
  console.log("Current Date:", getCurrentDateInEnglish());
  console.log("Current Data:", currentData);

  return (
    <div className="pt-0">
      <div className="">
        <div className="">
          <div>
            <div className="flex flex-col items-left  bg-green-200"> {/* Added 'my-8' for vertical margin */}
              <p className="text-left text-l font-semibold text-pink-700 m-2">Today's Date and Time:</p>
              
              <CurrentTimeOfBristolEngland />
            </div>
            <p className="text-center text-xl font-semibold my-4 text-teal-700">&#8681; Today's prayer time : {getCurrentDateInEnglish()} &#8681;</p>
             

          </div>
          <div className="p-1">
            {currentData.length > 0 ? (
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
                      {currentData[0].FajrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].ZuhrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].AsrBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].MaghribBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].IshaBegin}
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
                      {currentData[0].FajrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].ZuhrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].AsrJamat}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].MaghribBegin}
                    </td>
                    <td className="shadow-md rounded-md" style={tableCellStyle}>
                      {currentData[0].IshaJamat}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No data available for {getCurrentDateInEnglish()}</p>
            )}
          </div>

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

export default TimeTable;
