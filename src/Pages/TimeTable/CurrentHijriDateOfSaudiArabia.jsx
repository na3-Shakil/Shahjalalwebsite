const CurrentHijriDateOfSaudiArabia = () => {
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentDate = new Date();
    
    // Subtract one day in milliseconds (86400000 milliseconds in a day)
    currentDate.setTime(currentDate.getTime() - 86400000);

    const optionsArabic = {
        timeZone: saudiArabiaTimezone,
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

   /*  const optionsEnglish = {
        timeZone: saudiArabiaTimezone,
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        locale: 'en-US'
    }; */
    
    // Get the current date in Hijri calendar format for Saudi Arabia
    const hijriDateArabic = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', optionsArabic).format(currentDate);
    // const hijriDateEnglish = new Intl.DateTimeFormat('en-US-u-ca-islamic', optionsEnglish).format(currentDate);

    return (
        <div>
            {/* Display the full Hijri date in Arabic numerals and Arabic month names */}
            <p> {hijriDateArabic}</p>
            {/* Display the full Hijri date in Arabic numerals and English month names */}
            {/* <p>Hijri date in English: {hijriDateEnglish}</p> */}
        </div>
    );
};

export default CurrentHijriDateOfSaudiArabia;
