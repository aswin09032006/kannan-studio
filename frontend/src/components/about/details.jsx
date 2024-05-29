import React from "react";
import "./details.css";

const DetailsContainer = ({ title, description }) => {
  return (
    <div className="details-container">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="detail-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailsContainer;
