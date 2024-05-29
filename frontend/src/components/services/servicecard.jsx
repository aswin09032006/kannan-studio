import React from "react";
import { useNavigate } from "react-router-dom";
import "./servicecard.css";

const ServiceCard = ({
  title,
  description,
  imageSrc,
  altText,
  details,
  images,
  packages,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/service-details", {
      state: { title, description, details, images, packages },
    });
  };

  return (
    <div className="service-card" onClick={handleOnClick}>
      <img src={imageSrc} alt={altText} className="service-card-image" />
      <div className="view-details">
        <span>View Details</span>
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
