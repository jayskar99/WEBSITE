import './App.css';
import './Windows.css';
import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import LinkedList from './LinkedList';


function App() {
  const [taskbar, setTaskbar] = useState([]);

  const [startPressed, setStartPressed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const zList = useRef(new LinkedList(["About Me", "Contact Me", "Projects", "Resume", "Hobbies", "Service"]));
  const iconMap = {
    "About Me": "icons/MS_computer.png",
    "Contact Me": "icons/MS_phone.png",
    "Projects": "icons/MS_folder.png",
    "Resume": "icons/MS_newspaper.png",
    "Hobbies": "icons/MS_dice.png",
    "Service": "icons/MS_tree.png"
  };
  const applications = Object.keys(iconMap);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [aboutZ, setAboutZ] = useState(2);
  const [aboutMinimizedPressed, setAboutMinimizedPressed] = useState(false);
  const [aboutFullscreenPressed, setAboutFullscreenPressed] = useState(false);
  const [aboutClosedPressed, setAboutClosedPressed] = useState(false);

  const [showContactMe, setShowContactMe] = useState(false);
  const [contactZ, setContactZ] = useState(3);
  const [contactMinimizedPressed, setContactMinimizedPressed] = useState(false);
  const [contactFullscreenPressed, setContactFullscreenPressed] = useState(false);
  const [contactClosedPressed, setContactClosedPressed] = useState(false);

  const [showProjects, setShowProjects] = useState(false);
  const [projectsZ, setProjectsZ] = useState(4);
  const [projectsMinimizedPressed, setProjectsMinimizedPressed] = useState(false);
  const [projectsFullscreenPressed, setProjectsFullscreenPressed] = useState(false);
  const [projectsClosedPressed, setProjectsClosedPressed] = useState(false);

  const [showResume, setShowResume] = useState(false);
  const [resumeZ, setResumeZ] = useState(5);
  const [resumeMinimizedPressed, setResumeMinimizedPressed] = useState(false);
  const [resumeFullscreenPressed, setResumeFullscreenPressed] = useState(false);
  const [resumeClosedPressed, setResumeClosedPressed] = useState(false);

  const [showHobbies, setShowHobbies] = useState(false);
  const [hobbiesZ, setHobbiesZ] = useState(6);
  const [hobbiesMinimizedPressed, setHobbiesMinimizedPressed] = useState(false);
  const [hobbiesFullscreenPressed, setHobbiesFullscreenPressed] = useState(false);
  const [hobbiesClosedPressed, setHobbiesClosedPressed] = useState(false);

  const [showService, setShowService] = useState(false);
  const [serviceZ, setServiceZ] = useState(7);
  const [serviceMinimizedPressed, setServiceMinimizedPressed] = useState(false);
  const [serviceFullscreenPressed, setServiceFullscreenPressed] = useState(false);
  const [serviceClosedPressed, setServiceClosedPressed] = useState(false);

  const windowsConfig = [
    { name: "About Me", zIndex: aboutZ, show: showAboutMe, pressed: { minimize: aboutMinimizedPressed, fullscreen: aboutFullscreenPressed, close: aboutClosedPressed }},
    { name: "Contact Me", zIndex: contactZ, show: showContactMe, pressed: { minimize: contactMinimizedPressed, fullscreen: contactFullscreenPressed, close: contactClosedPressed }},
    { name: "Projects", zIndex: projectsZ, show: showProjects, pressed: { minimize: projectsMinimizedPressed, fullscreen: projectsFullscreenPressed, close: projectsClosedPressed }},
    { name: "Resume", zIndex: resumeZ, show: showResume, pressed: { minimize: resumeMinimizedPressed, fullscreen: resumeFullscreenPressed, close: resumeClosedPressed }},
    { name: "Hobbies", zIndex: hobbiesZ, show: showHobbies, pressed: { minimize: hobbiesMinimizedPressed, fullscreen: hobbiesFullscreenPressed, close: hobbiesClosedPressed }},
    { name: "Service", zIndex: serviceZ, show: showService, pressed: { minimize: serviceMinimizedPressed, fullscreen: serviceFullscreenPressed, close: serviceClosedPressed }}
  ];

  const [pressedState, setPressedState] = useState({});
  const handleMouseDown = (app) => {setPressedState((prev) => ({ ...prev, [app]: true }))}
  const handleMouseUp = (app) => {setPressedState((prev) => ({ ...prev, [app]: false }))}
  const [hoverState, setHoverState] = useState({});
  const handleMouseEnter = (app) => {
    setHoverState((prev) => ({ ...prev, [app]: true }));
    setIsHovering(true);
  }
  const handleMouseLeave = (app) => {
    setHoverState((prev) => ({ ...prev, [app]: false }));
    setIsHovering(false);
  }

  const bringToFront = (id) => {
    if (zList.current.head.value === id) return;
    zList.current.erase(id);
    zList.current.push_front(id);
    console.log('zList:', zList.current.toArray());

    setAboutZ(10-zList.current.find("About Me"));
    setContactZ(10-zList.current.find("Contact Me"));
    setProjectsZ(10-zList.current.find("Projects"));
    setResumeZ(10-zList.current.find("Resume"));
    setHobbiesZ(10-zList.current.find("Hobbies"));
    setServiceZ(10-zList.current.find("Service"));
  }
  const minimize = (id) =>  {
    if (id === "About Me") {
      console.log("about minimized");
      setShowAboutMe(false);
    } else if (id === "Contact Me") {
      console.log("contact minimized");
      setShowContactMe(false);
    } else if (id === "Projects") {
      console.log("projects minimized");
      setShowProjects(false);
    } else if (id === "Resume") {
      console.log("resume minimized");
      setShowResume(false);
    } else if (id === "Hobbies") {
      console.log("hobbies minimized");
      setShowHobbies(false);
    } else if (id === "Service") {
      console.log("service minimized");
      setShowService(false);
    }
  }
  const fullscreen = (id) => {
    if (id === "About Me") {
      console.log("about fullscreened");
    } else if (id === "Contact Me") {
      console.log("contact fullscreened");
    } else if (id === "Projects") {
      console.log("projects fullscreened");
    } else if (id === "Resume") {
      console.log("resume fullscreened");
    } else if (id === "Hobbies") {
      console.log("hobbies fullscreened");
    } else if (id === "Service") {
      console.log("service fullscreened");
    }
  }
  const handleMinimize = (name,val) => {
    if (name === "About Me") setAboutMinimizedPressed(val);
    else if (name === "Contact Me") setContactMinimizedPressed(val);
    else if (name === "Projects") setProjectsMinimizedPressed(val);
    else if (name === "Resume") setResumeMinimizedPressed(val);
    else if (name === "Hobbies") setHobbiesMinimizedPressed(val);
    else if (name === "Service") setServiceMinimizedPressed(val);
  }
  const handleFullscreen = (name,val) => {
    if (name === "About Me") setAboutFullscreenPressed(val);
    else if (name === "Contact Me") setContactFullscreenPressed(val);
    else if (name === "Projects") setProjectsFullscreenPressed(val);
    else if (name === "Resume") setResumeFullscreenPressed(val);
    else if (name === "Hobbies") setHobbiesFullscreenPressed(val);
    else if (name === "Service") setServiceFullscreenPressed(val);
  }
  const handleClose = (name,val) => {
    if (name === "About Me") setAboutClosedPressed(val);
    else if (name === "Contact Me") setContactClosedPressed(val);
    else if (name === "Projects") setProjectsClosedPressed(val);
    else if (name === "Resume") setResumeClosedPressed(val);
    else if (name === "Hobbies") setHobbiesClosedPressed(val);
    else if (name === "Service") setServiceClosedPressed(val);
  }
  const close = (id) => {
    setTaskbar(taskbar.filter((app) => app !== id));
    if (id === "About Me") {
      console.log("about closed");
      setShowAboutMe(false);
    } else if (id === "Contact Me") {
      console.log("contact closed");
      setShowContactMe(false);
    } else if (id === "Projects") {
      console.log("projects closed");
      setShowProjects(false);
    } else if (id === "Resume") {
      console.log("resume closed");
      setShowResume(false);
    } else if (id === "Hobbies") {
      console.log("hobbies closed");
      setShowHobbies(false);
    } else if (id === "Service") {
      console.log("service closed");
      setShowService(false);
    }
  }
  const clicked = (id) => {
    bringToFront(id);
    if (!taskbar.includes(id)) {
      setTaskbar([...taskbar, id]);
    }
    if (id === "About Me") {
      console.log("about opened");
      setShowAboutMe(true);
    } else if (id === "Contact Me") {
      console.log("contact opened");
      setShowContactMe(true);
    } else if (id === "Projects") {
      console.log("projects opened");
      setShowProjects(true);
    } else if (id === "Resume") {
      console.log("resume opened");
      setShowResume(true);
    } else if (id === "Hobbies") {
      console.log("hobbies opened");
      setShowHobbies(true);
    } else if (id === "Service") {
      console.log("service opened");
      setShowService(true);
    }
  }

  const clickStart = () => {
    setShowAboutMe(false);
    setShowContactMe(false);
    setShowProjects(false);
    setShowResume(false);
    setShowHobbies(false);
    setShowService(false);
  };

  const clickMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      document.getElementById("MS-speaker").src="icons/MS_speaker_loud.png";
      document.getElementById("MS-speaker").alt="speaker loud";
      audioRef.current.play();
      console.log('UNMUTE!');
    } else {
      document.getElementById("MS-speaker").src="icons/MS_speaker_quiet.png";
      document.getElementById("MS-speaker").alt="speaker quiet";
      audioRef.current.pause();
      console.log('MUTE!');
    }
    
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <audio ref={audioRef} src="Minecraft.mp3">
      </audio>
      <div className="center">
        <div className="icons">
        {applications.map((app) => (
          <div key={app} className="application" onClick={() => clicked(app)}
          onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
          style={{
            cursor: isHovering ? "url('/icons/MS_pointer.png'),auto": "url('/icons/MS_cursor.png'),auto",
          }}>
            <div className="icon-wrapper">
              <img className="icon" src={iconMap[app]} alt={`${app.toLowerCase()} icon`} />
            </div>
            <p className="icon-title">{app}</p>
          </div>
        ))}
        </div>
        <div className="windows">
        {windowsConfig.map(({ name, zIndex, show, pressed }) =>
          show ? (
            <Draggable key={name}>
              <div className={`${name[0].toLowerCase()}-window`} style={{ zIndex }} onClick={() => bringToFront(name)}>
                <div className="window-header">
                  <div>
                    <img className="window-header-icon" src={iconMap[name]} alt="icon"></img>
                    <span className="window-header-name">{name}</span>
                  </div>
                  <div className="control-icons">
                    <div className="control-button" onClick={() => minimize(name)}
                      onMouseDown={() => handleMinimize(name,true)} onMouseUp={() => handleMinimize(name,false)}
                      onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                      style={{
                        cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                        border: pressed.minimize ? "inset" : "outset"
                      }}>
                        <img className="control-icon" src="/icons/MS_minimize.png" alt="minimize button" />
                    </div>
                    <div className="control-button" onClick={() => fullscreen(name)}
                      onMouseDown={() => handleFullscreen(name,true)} onMouseUp={() => handleFullscreen(name,false)}
                      onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                      style={{
                        cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                        border: pressed.fullscreen ? "inset" : "outset"
                      }}>
                        <img className="control-icon" src="/icons/MS_fullscreen.png" alt="fullscreen button" />
                    </div>
                    <div className="control-button" onClick={() => close(name)}
                      onMouseDown={() => handleClose(name,true)} onMouseUp={() => handleClose(name,false)}
                      onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                      style={{
                        cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                        border: pressed.close ? "inset" : "outset"
                      }}>
                        <img className="control-icon" src="/icons/MS_close.png" alt="close button" />
                    </div>
                  </div>
                </div>
              </div>
            </Draggable>
          ) : null
        )}
      </div>

      </div>
      <div className="bottom">
        <div className="bottom-left">
          <div className="bottom-left-left" 
            onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            onClick={clickStart} onMouseDown={() => setStartPressed(true)} onMouseUp={() => setStartPressed(false)} 
            style={
              { cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",
                
                borderStyle: startPressed ? "inset": "outset",
                borderTopColor: startPressed ? "#282828": "#f3f3f3",
                borderLeftColor: startPressed ? "#282828": "#f3f3f3",
                borderBottomColor: startPressed ? "#f3f3f3": "#282828",
                borderRightColor: startPressed ? "#f3f3f3": "#282828",
                backgroundColor: startPressed ? "#bcbcbc": "#c0c0c0"
              }}>
              <img className="MS-logo" src="icons/MS_logo.png" alt="MS logo"></img>
              <p className="start-text">Start</p>
          </div>
          <div className="bottom-middle">
            <div className="taskbar">
            {taskbar.map((app, index) => (
              <div key={index} className="taskbar-member" onClick={() => (clicked(app))}
              onMouseEnter={() => handleMouseEnter(app)} onMouseLeave={() => handleMouseLeave(app)}
              style={{
                cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto"
              }}>
                <div>
                <img className="taskbar-icon" src={iconMap[app]} alt="icon"></img>
                <span className="taskbar-name">{app}</span>
                </div>
                {hoverState[app] && (
                <div className="taskbar-button" onClick={(e) => { e.stopPropagation(); close(app); }}
                onMouseDown={() => handleMouseDown(app)} onMouseUp={() => handleMouseUp(app)}
                style={{
                  border: pressedState[app] ? "inset" : "outset"
                }}>
                  <img className="control-icon" src="/icons/MS_close.png" alt="close button"></img>
                </div>
                )}
              </div>
                
            ))}
            </div>
          </div>
        </div>
        <div className="bottom-right">
          <img className="MS-speaker" id="MS-speaker" src="icons/MS_speaker_quiet.png" alt="speaker quiet"
            onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} 
            onClick={clickMute}
            style={
              { cursor: isHovering ? "url('/icons/MS_pointer.png'),auto" : "url('/icons/MS_cursor.png'),auto",

                height: isMuted ? "73%": "134%",
                marginLeft: isMuted ? "11px": "0px"
              }}>
          </img>
          <p className="clock">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
