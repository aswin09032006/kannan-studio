import React from "react";
import NavBar from "../utils/navbar";
import backgroundImage from "../../assets/bg.png";
import "./home.css";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import wa from "../../assets/wa.png";

const Home = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      <div className="description">
        <h1>Photography is the art of making memories tangible</h1>
        <button className="book">
          <a href="/reserve-your-spot" className="book-link">
            RESERVE YOUR SPOT
          </a>
        </button>
      </div>
      <div className="icons-container">
        <img src={ig} alt="Instagram" className="social-icon ig-icon" />
        <img src={fb} alt="Facebook" className="social-icon fb-icon" />
        <img src={wa} alt="WhatsApp" className="social-icon wa-icon" />
      </div>
    </div>
  );
};

export default Home;
