import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import NavBar from "./Navbar";
import Weather from "./Weather";
import AnalogClock from "./AnalogClock";

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
    <div className={`App ${loaded ? "loaded" : ""}`}>
      <NavBar />
      <div className="content visible">
        <h1>Michael Ryan Hess</h1>
        <h2>Web Development Portfolio</h2>
        <Weather />
        <div className="time">{currentTime}</div>
        <AnalogClock />
        <a href="projects.html" className="viewProjectsButton">
          View Projects
        </a>{" "}
        {/* Update this line */}
      </div>
    </div>
  );
};

export default App;
