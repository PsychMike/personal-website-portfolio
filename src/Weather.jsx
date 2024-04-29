import React, { useEffect, useState } from "react";
import axios from "axios";
import gsap from "gsap"; // Import GSAP
import { Draggable } from "gsap/all";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's location using Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      },
    );
  }, []);

  useEffect(() => {
    // Fetch weather data when userLocation is available
    if (userLocation) {
      const apiKey = "177b8da8a0522e84dfc730819bfdc84b";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${apiKey}&units=metric`;

      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => console.error("Error fetching weather data:", error));
    }
  }, [userLocation]);

  useEffect(() => {
    if (weatherData) {
      makeDraggable(); // Call makeDraggable when weatherData changes
    }
  }, [weatherData]);

  const convertToFahrenheit = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const getIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const makeDraggable = () => {
    gsap.registerPlugin(Draggable); // Register Draggable
    Draggable.create(".weather", {
      type: "x,y", // Enable dragging in both x and y directions
      bounds: "body", // Keep the draggable within the bounds of the body
      edgeResistance: 0.65, // Add edge resistance to prevent dragging off-screen
      zIndexBoost: false, // Disable zIndex boosting to avoid stacking issues
    });
  };

  return (
    <div className="weather">
      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>{convertToFahrenheit(weatherData.main.temp)} °F</p>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={getIconUrl(weatherData.weather[0].icon)}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
