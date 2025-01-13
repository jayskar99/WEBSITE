import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-background">
            <div className="banner">
                <div>Hi, I'm Jayden!</div>
            </div>
            <div className="about-body">
                <div className="tips">implement a carousel here with things about me: education, family, etc</div>
                <div className="about-body-right">
                    <div className="about-buttons">
                        <div className="about-button"><p>What's New</p></div>
                        <div className="about-button"><p>Previous Fact</p></div>
                        <div className="about-button"><p>Next Fact</p></div>
                    </div>
                    <div className="about-bar"></div>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-left">
                    <div className="about-checkbox"><img className="about-start-icon" src="icons/MS_logo.png" alt="windows logo"></img></div>
                    <div>Tip: you can press the Start Button to hide all windows</div>
                </div>
                <div className="about-close-button"><p>Close</p></div>
            </div>
        </div>
    );
}

export default AboutMe;