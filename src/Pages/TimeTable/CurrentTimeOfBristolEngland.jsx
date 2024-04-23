import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import SunCalc from 'suncalc';
import CurrentHijriDateOfSaudiArabia from './CurrentHijriDateOfSaudiArabia';

const CurrentTimeSunriseAndSunsetOfBristolEngland = () => {
  const [currentDateTimeOfBristol, setCurrentDateTimeOfBristol] = useState('');
  const [sunriseTime, setSunriseTime] = useState('');
  const [sunsetTime, setSunsetTime] = useState('');

  useEffect(() => {
    const getCurrentDateTimeOfBristol = () => {
      const currentDateTime = new Date();
      const timezone = 'Europe/London';
      const currentDateTimeOfBristol = moment(currentDateTime).tz(timezone).format('D MMMM, YYYY h:mm:ss A');
      return currentDateTimeOfBristol;
    };

    const updateDateTimeAndSunTimes = () => {
      setCurrentDateTimeOfBristol(getCurrentDateTimeOfBristol());
      const coordinates = { latitude: 51.4545, longitude: -2.5879 };
      const today = new Date();
      const times = SunCalc.getTimes(today, coordinates.latitude, coordinates.longitude);
      const sunriseTimeInBristol = moment(times.sunrise).tz('Europe/London').format('h:mm A');
      const sunsetTimeInBristol = moment(times.sunset).tz('Europe/London').format('h:mm A');
      setSunriseTime(sunriseTimeInBristol);
      setSunsetTime(sunsetTimeInBristol);
    };

    const intervalId = setInterval(updateDateTimeAndSunTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hirjiDate = <CurrentHijriDateOfSaudiArabia />;
  return (
    <div className="">

      <div className='flex '>
        <span className='mr-3 p-1 font-semibold  text-blue-700'>{hirjiDate}</span>
       <span className='p-1 font-semibold  text-green-700'> {currentDateTimeOfBristol}</span>
      </div>
      <div className='p-1'>
        <span className='pr-3 font-semibold  text-yellow-500'>Sunrise: {sunriseTime}</span>
        <span className='pr-3  font-semibold  text-orange-400'>Sunset: {sunsetTime}</span>
      </div>

    </div>
  );
};

export default CurrentTimeSunriseAndSunsetOfBristolEngland;
