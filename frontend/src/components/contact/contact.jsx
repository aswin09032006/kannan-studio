import React, { useState } from "react";
import "./contact.css";
import NavBar from "../utils/navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Trying to fetch...");

    try {
      const response = await fetch("http://localhost:8081/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          url,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data added successfully", data);

        setName("");
        setEmail("");
        setNumber("");
        setUrl("");
        setMessage("");

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Thank you for your message. It has been sent.",
          confirmButtonText: "OK",
        });
      } else {
        const data = await response.json();
        console.error("Error adding data: ", data);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="contact-us">
        <div className="text">
          <div className="contact-header">
            <p>Let's Work Together</p>
            <p>kannanstudio@gmail.com</p>
            <p>+91 1234567890</p>
          </div>
          <div className="map">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=16,%20Veeranam%20Main%20Rd,%20Ponnammapet,%20Salem,%20Tamil%20Nadu%20636001+(Kannan%20Digital%20Studio)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Kannan Digital Studio Location"
            ></iframe>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name"
              className="name"
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone Number"
              className="phone"
              aria-label="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="website">Website (Optional)</label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Website"
              className="website"
              aria-label="Website"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="message"
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="submit-contact">
              Submit
            </button>
          </form>
          <div className="social-links">
            <a href="https://www.facebook.com" className="social-link">
              f
            </a>
            <a href="https://www.instagram.com" className="social-link">
              i
            </a>
            <a href="https://www.twitter.com" className="social-link">
              x
            </a>
            <a href="https://www.linkedin.com" className="social-link">
              in
            </a>
          </div>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Kannan Studio. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
