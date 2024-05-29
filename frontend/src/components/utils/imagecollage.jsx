import React from "react";
import "./imagecollage.css";

const ImageCollage = ({ images }) => {
  return (
    <div className="collage-container">
      {images.map((image, index) => {
        <div className="collage-item" key={index}>
          <img src={image.src} alt={image.alt} />
        </div>;
      })}
    </div>
  );
};

export default ImageCollage;
