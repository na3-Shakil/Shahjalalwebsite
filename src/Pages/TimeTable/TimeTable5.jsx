import { useEffect, useState } from "react";
import CurrentTimeOfBristolEngland from "./CurrentTimeOfBristolEngland";
const TimeTable = () => {
    // Your data
    const [data, setData] = useState([]);
  
    // Fetch the data from timeTableData.json
    useEffect(() => {
      fetch("./timeTableData.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    // Function to get the current date in English format
    const getCurrentDateInEnglish = () => {
      const currentDate = new Date();
      const options = { month: "long", day: "numeric", year: "numeric" };
      return currentDate.toLocaleDateString("en-US", options);
    };
  
    // Function to filter data for the current date
    const getCurrentDateData = () => {
      const currentDate = getCurrentDateInEnglish();
  
      // Extract month and date from currentDate
      const [month, dayNumber] = currentDate.split(" ");
  
      // Get the data for the current date
      const filteredData = data.filter(
        (item) =>
          item.EnglishMonth === month &&
          item.EnglishDate === parseInt(dayNumber, 10)
      );
  
      // Adjust Fajr time during Ramadan
      const isRamadan = month === "Ramadan"; // Assuming "Ramadan" is the Arabic month name
      if (isRamadan && filteredData.length > 0) {
        // Adjust Fajr time by adding 20 minutes
        filteredData[0].FajrBegin.setMinutes(filteredData[0].FajrBegin.getMinutes() + 20);
      }
  
      return filteredData;
    };
  
    // Get the data for the current date
    const currentData = getCurrentDateData();
    console.log("Current Date:", getCurrentDateInEnglish());
    console.log("Current Data:", currentData);
  
    return (
      <div className="pt-5  ">
        <div className="">
  
          <div className="">
            <div>
              <CurrentTimeOfBristolEngland />
            </div>
  
            <div className=" p-1">
              {currentData.length > 0 ? (
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                  <thead>
                    <tr className="text-slate-600">
                      <th className=" " style={tableHeaderCellStyle}></th>
                      <th className=" shadow-md rounded-md" style={tableHeaderCellStyle}>Fajr</th>
                      <th className=" shadow-md rounded-md" style={tableHeaderCellStyle}>Zuhr</th>
                      <th className=" shadow-md rounded-md" style={tableHeaderCellStyle}>Asr</th>
                      <th className=" shadow-md rounded-md" style={tableHeaderCellStyle}>Maghrib</th>
                      <th className=" shadow-md rounded-md" style={tableHeaderCellStyle}>Isha</th>
                    </tr>
                  </thead>
  
                  <tbody>
                    <tr className=" text-slate-600">
                      <div
                        className="text-slate-600  rounded-lg mb-1 font-bold mr-4 shadow-md"
                        style={tableSubHeaderCellStyle}
                      >
                        Begin
                      </div>
                      <td className="shadow-md rounded-md " style={tableCellStyle}>{currentData[0].FajrBegin}</td>
                      <td className="shadow-md rounded-md " style={tableCellStyle}>{currentData[0].ZuhrBegin}</td>
                      <td className="shadow-md rounded-md " style={tableCellStyle}>{currentData[0].AsrBegin}</td>
                      <td className="shadow-md rounded-md " style={tableCellStyle}>{currentData[0].MaghribBegin}</td>
                      <td className="shadow-md rounded-md " style={tableCellStyle}>{currentData[0].IshaBegin}</td>
                    </tr>
                    <tr className="text-slate-600">
                      <div
                        className="text-slate-600  rounded-lg font-bold mr-4 shadow-md"
                        style={tableSubHeaderCellStyle}
                      >
                        Jamat
                      </div>
                      <td className=" shadow-md rounded-md " style={tableCellStyle}>{currentData[0].FajrJamat}</td>
                      <td className=" shadow-md rounded-md " style={tableCellStyle}>{currentData[0].ZuhrJamat}</td>
                      <td className=" shadow-md rounded-md " style={tableCellStyle}>{currentData[0].AsrJamat}</td>
                      <td className=" shadow-md rounded-md " style={tableCellStyle}>{currentData[0].MaghribBegin}</td>
                      <td className=" shadow-md rounded-md " style={tableCellStyle}>{currentData[0].IshaJamat}</td>
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
  