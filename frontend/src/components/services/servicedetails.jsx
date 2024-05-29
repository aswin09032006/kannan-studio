import React from "react";
import { useLocation } from "react-router-dom";
import "./servicedetails.css";

const ServiceDetails = () => {
  const location = useLocation();
  const { title, description, details, images, packages } =
    location.state || {};

  return (
    <div className="service-details-container">
      <div className="details-header">
        <h1>{title}</h1>
      </div>
      <div className="details-content">
        <p>{description}</p>
        <div className="additional-details">
          <p>{details}</p>
        </div>
        <div className="packages">
          <h2>Packages Available</h2>
          {packages &&
            packages.map((pkg, index) => (
              <div key={index} className="package">
                <p>{pkg}</p>
              </div>
            ))}
        </div>
        <div className="image-gallery">
          {images &&
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index}`}
                className="gallery-image"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
