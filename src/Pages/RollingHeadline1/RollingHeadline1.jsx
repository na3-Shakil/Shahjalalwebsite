import React from 'react';
import './RollingHead1.css'; // Import CSS file for styling

const RollingHeadline = () => {
    return (
        <div className="rolling-head" style={{ backgroundColor: '#B2F7D4', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="rolling-cont">
                <p className="text-red-700 text-xl text-left font-semibold">
                    *Remember to Fast 6 Days in Shawwal to get the reward of whole year's fasting!*
                </p>
                {/* <p>Another headline sentence goes here</p>
        <p>And one more headline for demonstration</p> */}
            </div>
        </div>
    );
};

export default RollingHeadline;
