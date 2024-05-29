import React, { useState } from "react";
import "./signin.css";
import image from "../../assets/weddingImg.jpg";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Trying to sign in...");
    try {
      const response = await fetch("http://localhost:8081/admin-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          console.log(email, password);
          console.log("Signin successful : ", data);
          navigate("/admin");
        } else {
          console.error("Signin failed : ", data);
        }
      } else {
        console.error("Unexpected response format:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="admin-loginpage-container">
      <div className="admin-loginpage">
        <div className="admin-login-container">
          <h1>Login here</h1>
          <form className="login-form-container" onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {emailError && <div className="error">{emailError}</div>}
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            {passwordError && <div className="error">{passwordError}</div>}
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="admin-login-image-container">
          <img src={image} alt="Admin Login" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
