import React from 'react';
import './RollingHeadline.css'; // Import CSS file for styling

const RollingHeadline = () => {
  return (
    <div className="rolling-headline" style={{ backgroundColor: '', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="rolling-content">
        <p className="text-red-600 text-xl text-left font-semibold">
          *Jumma Prayer is at 1.30 PM*  **  **Seperate Building (Khadiza center) for Ladies**<br />
        </p>
        {/* <p>Another headline sentence goes here</p>
        <p>And one more headline for demonstration</p> */}
      </div>
    </div>
  );
};

export default RollingHeadline;
