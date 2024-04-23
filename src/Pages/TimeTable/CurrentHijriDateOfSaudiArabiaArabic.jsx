import React from 'react';

const CurrentHijriDateOfSaudiArabia = () => {
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentDate = new Date();
    
    //Subtract one day in milliseconds (86400000 milliseconds in a day)
    //currentDate.setTime(currentDate.getTime() - 86400000);

    const options = {
        timeZone: saudiArabiaTimezone,
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    // Get the current date in Hijri calendar format for Saudi Arabia
    const hijriDate = new Intl.DateTimeFormat('en-US-u-ca-islamic', options).format(currentDate);

    return (
        <div style={{ fontFamily: 'ArabicFont' }}>
            {/* Display the full Hijri date in Arabic numerals and English month names */}
            <p>{hijriDate}</p>
        </div>
    );
};

export default CurrentHijriDateOfSaudiArabia;
