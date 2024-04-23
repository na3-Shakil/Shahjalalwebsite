import React, { useState } from 'react';
import jan24 from "../../assets/images/0001.jpg"
import feb24 from "../../assets/images/0002.jpg"
import march24 from "../../assets/images/0003.jpg"
import april24 from "../../assets/images/0004.jpg"
import may24 from "../../assets/images/0005.jpg"
import jun24 from "../../assets/images/0006.jpg"
import jul24 from "../../assets/images/0007.jpg"
import aug24 from "../../assets/images/0008.jpg"
import sep24 from "../../assets/images/0009.jpg"
import oct24 from "../../assets/images/0010.jpg"
import nov24 from "../../assets/images/0011.jpg"
import dec24 from "../../assets/images/0012.jpg"

const months = [
  { name: 'January', image: jan24 },
  { name: 'February', image: feb24 },
  { name: 'March', image: march24 },
  { name: 'April', image: april24 },
  { name: 'May', image: may24 },
  { name: 'June', image: jun24 },
  { name: 'July', image: jul24 },
  { name: 'August', image: aug24 },
  { name: 'September', image: sep24 },
  { name: 'October', image: oct24 },
  { name: 'November', image: nov24 },
  { name: 'December', image: dec24 },
];

const PrayerTimetable = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  return (
    <div>
      
        <br/>
        <p className="text-center text-5xl m-5 text-blue-700">Monthly Prayer Times</p>
        <p className="text-center text-xl m-6  text-red-700"> Zuhr Jamat time on Friday is for the Jumuah prayer;  Winter time Jummah is at 1:00PM and summer time Jummah is at 1:30PM.</p>
        <p className="text-center text-l  text-green-700">*In the UK the clocks go forward 1 hour at 1am on the last Sunday in March, and back 1 hour at 2am on the last Sunday in October.*</p>
     
      <select
        className="m-8"
        style={{ backgroundColor: 'lightgreen' }} // Example of background color
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month.name}
          </option>
        ))}
      </select>


      <img src={months[selectedMonth].image} alt="" />
    </div>
  );
};

export default PrayerTimetable;
