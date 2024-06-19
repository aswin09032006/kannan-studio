import React, { useState, useRef } from "react";
import "./navbar.css";
import logoImage from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
    navRef.current.classList.toggle("responsive");
    // Toggle visibility of other elements on the page
    const otherElements = document.querySelectorAll(".hide-on-menu");
    otherElements.forEach((element) => {
      element.style.display = isNavVisible ? "block" : "none";
    });
  };

  return (
    <header>
      <div className="logo">
        <img
          src={logoImage}
          alt="Kannan Studio Logo"
          style={{ height: "50px" }}
        />
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          <h3>Kannan Studio</h3>
        </a>
      </div>
      <nav className="nav-overlay" ref={navRef}>
        <a href="/home">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        <button
          className="nav-btn nav-close-btn"
          style={{
            display: isNavVisible ? "block" : "none",
          }}
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        style={{ display: isNavVisible ? "none" : "block" }}
        onClick={toggleNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
