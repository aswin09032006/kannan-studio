import React, { useRef } from "react";
import "./reservespot.css";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const ReserveSpot = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a31cfq3', 'template_8y1ufzo', form.current, 'sBx50jpBqLeVIdP6r')
      .then(
        () => {
          swal('Success', 'Your message has been sent!', 'success');
          form.current.reset();

        },
        (error) => {
          swal('Failed', 'There was an error sending your message. Please try again.', 'error');
        },
      );
  };

  return (
    <div className="reservespotpage">
      <div className="Reserve">
        <div className="reserve-container">
          <h1>Reserve your spot</h1>
          <form className="reserve-form-grid" ref={form} onSubmit={sendEmail}>
            <div className="reserve-form-group">
              <label htmlFor="date">Select a date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                placeholder="Date"
            
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
              />
            </div>

            <button type="submit" className="book-now-button full-width">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveSpot;
