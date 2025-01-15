import React, { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
    // setup for mouse interactions
    const [isHovering, setIsHovering] = useState(false);
    const [galleryPressed, setGalleryPressed] = useState(false);
    const [previousPressed, setPreviousPressed] = useState(false);
    const [nextPressed, setNextPressed] = useState(false);
    const [closePressed, setClosePressed] = useState(false);

    // setup for tip slides
    const [tipNumber, setTipNumber] = useState(0);
    const tips = [
    <div>I am a senior Computer Science student at Texas A&M University. I will also have minors in Mathematics and Statistics.</div>,
    <div>I work as a Peer Teacher in the Computer Science Department at A&M.</div>,
    <div>I have a lovely fianceé named Addison who I am marrying this June!</div>,
    <div>Addison and I have a cat named Suki. She is only one year old and very cute.</div>,
    <div>My hobbies include hosting gamenights, snowboarding, going to the gym, and cooking.</div>,
    <div>Every year since I was born, I volunteer at the MS150 bike ride to help raise money for Multiple Sclerosis research.</div>]
    const clickTip = (number) => {
        let temp = tipNumber+number;
        if (temp > 5) temp = 0;
        if (temp < 0) temp = 5;
        setTipNumber(temp);
    }
    return (
        <div className="about-background">
            <div className="banner">
                <div>Hi, I'm Jayden!</div>
            </div>
            <div className="about-body">
                <div className="tips">
                    <div className="tip-left">
                        <div className="tip-top-left">
                            <img className="tip-icon" src="icons/MS_tip.png" alt="question mark"></img>
                        </div>
                    </div>
                    <div className="tip-right">
                        <div className="tip-top-right">
                            <p>Did you know...</p>
                        </div>
                        <div className="tip-bottom-right">
                            {tips[tipNumber]}
                        </div>
                    </div>
                    
                </div>
                <div className="about-body-right">
                    <div className="about-buttons">
                        <div className="about-button" 
                        onMouseDown={() => setGalleryPressed(true)} onMouseUp={() => setGalleryPressed(false)}
                        onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                        style={{
                            cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                            borderTopColor: galleryPressed ? "#282828": "#f3f3f3",
                            borderLeftColor: galleryPressed ? "#282828": "#f3f3f3",
                            borderBottomColor: galleryPressed ? "#f3f3f3": "#282828",
                            borderRightColor: galleryPressed ? "#f3f3f3": "#282828"
                        }}><p>Photo Gallery</p></div>
                        <div className="about-button" onClick={() => clickTip(-1)} 
                        onMouseDown={() => setPreviousPressed(true)} onMouseUp={() => setPreviousPressed(false)}
                        onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                        style={{
                            cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                            borderTopColor: previousPressed ? "#282828": "#f3f3f3",
                            borderLeftColor: previousPressed ? "#282828": "#f3f3f3",
                            borderBottomColor: previousPressed ? "#f3f3f3": "#282828",
                            borderRightColor: previousPressed ? "#f3f3f3": "#282828"
                        }}><p>Previous Fact</p></div>
                        <div className="about-button" onClick={() => clickTip(1)} 
                        onMouseDown={() => setNextPressed(true)} onMouseUp={() => setNextPressed(false)}
                        onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                        style={{
                            cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                            borderTopColor: nextPressed ? "#282828": "#f3f3f3",
                            borderLeftColor: nextPressed ? "#282828": "#f3f3f3",
                            borderBottomColor: nextPressed ? "#f3f3f3": "#282828",
                            borderRightColor: nextPressed ? "#f3f3f3": "#282828"
                        }}><p>Next Fact</p></div>
                    </div>
                    <div className="about-bar"></div>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-left">
                    <div className="about-checkbox"><img className="about-start-icon" src="icons/MS_logo.png" alt="windows logo"></img></div>
                    <div>Tip: you can press the Start Button to hide all windows</div>
                </div>
                <div className="about-close-button"
                onMouseDown={() => setClosePressed(true)} onMouseUp={() => setClosePressed(false)}
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                style={{
                    cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                    borderTopColor: closePressed ? "#282828": "#f3f3f3",
                    borderLeftColor: closePressed ? "#282828": "#f3f3f3",
                    borderBottomColor: closePressed ? "#f3f3f3": "#282828",
                    borderRightColor: closePressed ? "#f3f3f3": "#282828"
                }}><p>Pointless Button</p></div>
            </div>
        </div>
    );
}

export default AboutMe;