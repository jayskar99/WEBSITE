import React from 'react';
import './ContactMe.css';

function ContactMe() {
    return (
        <div className="background">
            <div className="options">
                <div className="option">File</div>
                <div className="option">Edit</div>
                <div className="option">Search</div>
                <div className="option">Help</div>
            </div>
            <div className="notes">
                <div className="note">Phone: (713) 825-2439</div>
                <div className="note">Email: jayden@apprhythmia.com</div>
                <a href="http://linkedin.com/in/JaydenDavisCox" className="note">LinkedIn: linkedin.com/in/JaydenDavisCox</a>
                <a href="https://github.com/jayskar99" className="note">GitHub: github.com/jayskar99</a>
            </div>
        </div>
    );
}

export default ContactMe;