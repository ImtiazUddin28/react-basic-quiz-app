import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header_container'>
            
            <div className="header_description">
                <h3>" Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time. <span>Test Your Skills, Increase Your Confidence </span>"</h3>
            </div>
            <div className="header_pic">
                <img src="https://atlassianblog.wpengine.com/wp-content/uploads/2021/09/1186_atlassian-teamwork-quotes_1120x545@2x-scaled.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;