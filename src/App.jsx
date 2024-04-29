import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router } from "react-router-dom"; // Import HashRouter
import "./styles.css"; // Global styles
import NavBar from "./Navbar";
import Weather from "./Weather";
import AnalogClock from "./AnalogClock";
import ProjectsPage from "./ProjectsPage"; // Make sure ProjectsPage is properly exporting a React component

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setLoaded(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toTimeString().split(" ")[0]);
    }, 1000);
    AOS.init({ duration: 1000, once: true });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      {" "}
      {/* Wrap your components inside Router */}
      <div className={`App ${loaded ? "loaded" : ""}`}>
        <NavBar />
        <div className="content visible">
          <h1>Michael Ryan Hess</h1>
          <h2>Web Development Portfolio</h2>
          <Weather />
          <div className="time">{currentTime}</div>
          <AnalogClock />
          <div>
            {/* <h2>My Projects</h2> */}
            <ProjectsPage />
            {/* Render ProjectsPage component here */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
