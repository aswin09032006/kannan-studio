import React, { useState } from "react";
import "./reservespot.css";
import { useNavigate } from "react-router-dom";

const ReserveSpot = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [photo, setPhoto] = useState(false);
  const [video, setVideo] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("trying to fetch...");

    try {
      const response = await fetch("http://localhost:8081/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          time,
          photo, // This should be a boolean value
          video, // This should be a boolean value
          firstName,
          lastName,
          email,
          number,
          location,
        }),
      });
      const data = await response.json();
      if (response.status === 201) {
        console.log("Data added successfully", data);
        navigate("/");
      } else {
        console.log("Error adding data: ", data.error); // Log the error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="reservespotpage">
      <div className="Reserve">
        <div className="reserve-container">
          <h1>Reserve your spot</h1>
          <form className="reserve-form-grid" onSubmit={handleSubmit}>
            <div className="reserve-form-group">
              <label htmlFor="date">Select a date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="reserve-form-group">
              <label htmlFor="time">Select a time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="service-item">
              <img
                src="https://s1.1zoom.me/big0/267/Men_Closeup_Camera_462030.jpg"
                alt="Photo shoot"
                id="Photo-shoot"
              />
              <div className="service-item-label">
                <input
                  type="checkbox"
                  id="photoshoot"
                  name="service"
                  checked={photo}
                  onChange={(e) => setPhoto(e.target.checked)} // Use e.target.checked to toggle boolean state
                />
                <label htmlFor="photoshoot">Photo shoot</label>
              </div>
            </div>
            <div className="service-item">
              <img
                src="https://t4.ftcdn.net/jpg/04/80/67/95/360_F_480679500_nHUCLZO9d5zVFQXRKIGIq8HUcOzkonFG.webp"
                alt="Video recording"
              />
              <div className="service-item-label">
                <input
                  type="checkbox"
                  id="videoRecording"
                  name="service"
                  checked={video}
                  onChange={(e) => setVideo(e.target.checked)} // Use e.target.checked to toggle boolean state
                />
                <label htmlFor="videoRecording">Video recording</label>
              </div>
            </div>

            <div className="reserve-form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="reserve-form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="reserve-form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="reserve-form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="reserve-form-group full-width">
              <label htmlFor="location">Event Place</label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button type="submit" className="book-now-button">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveSpot;
