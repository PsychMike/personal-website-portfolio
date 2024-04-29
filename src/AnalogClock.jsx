import React, { useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import gsap from "gsap"; // Import GSAP
import { Draggable } from "gsap/all";

const AnalogClock = () => {
  const [date, setDate] = React.useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    makeDraggable(); // Call makeDraggable when the component mounts
  }, []);

  const makeDraggable = () => {
    gsap.registerPlugin(Draggable); // Register Draggable
    Draggable.create(".analog-clock", {
      type: "x,y", // Enable dragging in both x and y directions
      bounds: "body", // Keep the draggable within the bounds of the body
      edgeResistance: 0.65, // Add edge resistance to prevent dragging off-screen
      zIndexBoost: false, // Disable zIndex boosting to avoid stacking issues
    });
  };

  return (
    <div className="analog-clock">
      <Clock value={date} size={50} />
    </div>
  );
};

export default AnalogClock;
