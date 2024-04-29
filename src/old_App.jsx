import React, { useEffect, useState } from "react";
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
      const now = new Date();
      setCurrentTime(now.toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={`App ${loaded ? "loaded" : ""}`}>
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/JfZC0UqTUp0?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=JfZC0UqTUp0&mute=1&modestbranding=1&background=1&vq=hd1080"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        ></iframe>
      </div>
      <NavBar />
      <div className="content visible">
        <h1>Michael Ryan Hess</h1>
        <h2>Web Development Portfolio</h2>
        <Weather />
        <div className="time">{currentTime}</div>
        <AnalogClock />
      </div>
    </div>
  );
};

export default App;
